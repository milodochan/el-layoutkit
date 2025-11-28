import { computed, reactive, ref } from 'vue'
import { userMessage } from './userMessage'

export function useTable() {
    const message = userMessage()
    const _table_columns = ref([])
    const _table_data = ref([])
    const _table_query_params = ref([])
    const _loadEvent = ref(null)
    const table = reactive({
        tableType: 'default',
        data: computed(() => _table_data.value),
        columns: computed(() => _table_columns.value),
        pagination: {
            index: 1,
            size: 10,
            options: [10, 20, 30],
            total: 0
        },
        attr: {
            loading: false,
            dataKey: 'id',
            dataParentKey: 'pid',
            showNumber: false,
            expandAll: false,
            //treeProps: "{ hasChildren: 'hasChildren', children: 'children', checkStrictly: false }",
        },
        _setQueryParams: (filterData) => { _table_query_params.value = filterData },
        setPageSize: (size) => { table.pagination.size = size },
        setPageOptions: (options) => { table.pagination.options = options },
        setRowKey: (dataKey) => {
            table.attr.dataKey = dataKey
        },
        setParentKey: (dataKey) => {
            table.attr.dataParentKey = dataKey
        },
        showNumber: () => {
            table.attr.showNumber = true
        },
        enableTree: () => {
            table.tableType = 'treetable'
        },
        setColumn: (field, title) => {
            const column = {
                field, title,
                width: '',
                template: undefined,
                setAttr(attrs = {}) {
                    if (typeof attrs !== 'object') return this
                    if ('width' in attrs) this.width = attrs.width
                    return this // 支持链式调用, 暂时宽度，需要其他在加
                },
                setTemplate(template) {
                    this.template = template
                    return this
                }
            }

            _table_columns.value.push(column)
            return column
        },
        registerLoader: (fn) => {
            _loadEvent.value = fn
        },
        load: async () => {
            if (typeof _loadEvent.value !== 'function') {
                console.warn('未设置 load 函数，请使用 table.setLoader(fn) 进行设置')
                return
            }

            table.loading = true
            const { index = 1, size = 10 } = table.pagination ?? {}
            try {
                const res = await _loadEvent.value({ index, size }, _table_query_params.value)
                switch (table.tableType) {
                    case 'treetable':
                        _table_data.value = res
                        break
                    case 'default':
                    default:
                        // 此处预处理数据判断数据是否包含分页信息
                        _table_data.value = res.records ?? []
                        break
                }

                if (table.pagination !== null) {
                    table.pagination.total = res.total ?? 0
                }
            } catch (e) {
                // 可选：提示用户
                message.error('表格加载数据失败，请稍后重试')
                console.error('表格加载数据失败:', e)
            } finally {
                table.loading = false
            }
        },
        reload: async () => {
            if (table.pagination !== null) table.pagination.index = 1
            await table.load()
        }
    })

    return table
}
