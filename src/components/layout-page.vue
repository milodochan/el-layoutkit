<script setup>
import store from '../core/store'
import { computed, onMounted, ref, watch } from 'vue'
import { FilterEnum } from '../enum/FilterEnum'
import LayoutPageColumn from './layout-page-column.vue'
import LayoutPageDialog from './layout-page-dialog.vue'
import { useMessage } from '../core/useMessage'

const message = useMessage()
const selectedNodes = ref()
const props = defineProps({
    /**
     * 表格头部配置
     * 每项应包含：field: '字段名'、title: '标题'、style: '样式'
     */
    table: {
        type: Object,
        default: () => { }
    },
    /**
     * 表格工具栏
     */
    tablebar: {
        type: Object,
        default: () => { }
    },
    /**
     * 功能按钮配置
     * 每项包含：label: '名称'、icon: '图标'、secondary: '图标颜色'、command: '事件'
     */
    toolbar: {
        type: Object,
        default: () => { }
    },
    /**
     * 筛选框配置
     * 每项包含：label: '名称'、field: '字段名'、value: '字段值'
     */
    filter: {
        type: Object,
        default: () => { }
    },
    /**
     * 弹出框配置
     */
    dialog: {
        type: Object,
        default: () => { }
    }
})

const filterForm = ref([])
const tableFilter = computed(() => props.filter ?? { data: [] })
const tableColumns = computed(() => props.table?.columns ?? [])
const dataTable = computed(() => {
    if (props.table?.tableType === 'treetable') {
        return buildTreeTableData(props.table.data)
    } else {
        return props.table?.data ?? []
    }
})

const pageInfo = computed(() => {
    return props.table?.pagination ?? {
        index: 1,
        size: 10,
        options: [10, 20, 30],
        total: 0
    }
})

const tableAttr = computed(() => {
    return props.table?.attr ?? {
        loading: false,
        dataKey: 'id',
        dataParentKey: 'pid',
        defaultColumnType: 'selection',
        enabledDefaultColumn: true,
        expandAll: false
    }
})

const tableBar = computed(() => {
    return props.tablebar ?? {
        title: '工具栏',
        width: '',
        align: 'center',
        position: 'right',
        actions: []
    }
})
const visibleActions = computed(() => tableBar.value.actions.filter(action => store.hasPer(action.perKey)))

const toolBar = computed(() => props.toolbar ?? { actions: [] })

const onPageSizeChange = (event) => {
    if (props.table)
        props.table.pagination.size = event
}

const onPageChange = (event) => {
    if (props.table) {
        props.table.pagination.index = event
        props.table._load()
    }
}

// 筛选按钮事件处理
const onFilterChange = (filterType) => {
    let filterData = {}
    if (!filterType) {
        // 清除数据
        filterForm.value.forEach((item, index) => {
            item.value = item.defaultValue ?? ''
        })
    }

    if (props.table) {
        filterData = filterFunc()
        props.table._setQueryParams(filterData)
        props.table._load()
    }
}

// 此树结构必须要求
const buildTreeTableData = (data) => {
    const idField = tableAttr.value.dataKey
    const pidField = tableAttr.value.dataParentKey
    const formatId = (val) => val?.toString().trim().toLowerCase() ?? ''

    // 统一格式处理
    const normalizedData = data.map(item => ({
        ...item,
        _id: formatId(item[idField]),
        _pid: formatId(item[pidField])
    }))

    const allIds = new Set(normalizedData.map(item => item._id))

    // 找出所有顶层节点（其 pid 不在 id 列中）
    const rootNodes = normalizedData.filter(item => !allIds.has(item._pid))

    const build = (parent) => {
        const children = normalizedData
            .filter(item => item._pid === parent._id)
            .map(item => build(item))

        return {
            key: parent._id,
            data: parent,
            children
        }
    }

    return rootNodes.map(root => build(root))
}

// 工具栏事件数据处理
const onToolBarEvent = (item, e) => {
    if (props.table?.tableType === 'treetable') {
        let selectObj
        if (selectedNodes.value !== undefined) {
            const selectValue = Object.keys(selectedNodes.value || {})[0] || null
            if (selectValue !== null) {
                selectObj = dataTable.value.find(a => a[tableAttr.value.dataKey].toLowerCase() === selectValue.toLowerCase())
            }
        }
        item._command(selectObj, e)
    }
    else {
        item._command(selectedNodes.value, e)
    }
}

watch(
    () => props.filter?.data ?? [],
    (val) => {
        if (Array.isArray(val)) {
            filterForm.value = val.map(item => ({ ...item }))
        } else {
            filterForm.value = []   // 默认空数组防止页面异常
        }
    },
    { immediate: true }
)

const filterFunc = () => {
    let filterData = {}
    if (props.filter) {
        for (const item of filterForm.value) {
            if (!item.required) continue

            const v = item.value

            const isEmpty =
                v === null ||
                v === undefined ||
                v === '' ||
                (Array.isArray(v) && v.length === 0)

            if (isEmpty) {
                message.warning(`请填写【${item.label}】字段`)
                return
            }
        }

        filterData = props.filter._buildFunc(filterForm.value)
    }
    return filterData
}

onMounted(() => {
    if (props.table) {
        let filterData = filterFunc()
        props.table._setQueryParams(filterData)
        props.table._load()
    }
})
</script>

<template>
    <div style="margin: 25px;">
        <!--搜索区-->
        <section>
            <!-- 搜索条件区域 -->
            <el-form>
                <!-- 上半行， 调整成自适应根据分辨率 -->
                <el-row :gutter="20" v-if="tableFilter.data.length > 0">
                    <el-col v-for="(item, i) in filterForm" :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
                        <el-form-item :label="item.fieldAttr.label">
                            <!-- 文本输入 -->
                            <el-input v-if="item.fieldType === FilterEnum.TEXT" v-model="item.value"
                                :placeholder="item.placeholder" v-bind="item.fieldAttr" />

                            <!-- 数字输入 -->
                            <el-input-number v-else-if="item.fieldType === FilterEnum.NUMBER" v-model="item.value"
                                :placeholder="item.placeholder" v-bind="item.fieldAttr" />
                            <!-- 下拉框 -->
                            <el-select v-else-if="item.fieldType === FilterEnum.SELECT" v-model="item.value"
                                :placeholder="item.placeholder" v-bind="item.fieldAttr">
                                <el-option v-for="option in item.options" :key="option.value" :label="option.label"
                                    :value="option.value" />
                            </el-select>

                            <!-- 日期 -->
                            <el-date-picker v-else-if="item.fieldType === FilterEnum.DATE" v-model="item.value"
                                type="date" placeholder="请选择日期" format="YYYY-MM-DD" value-format="YYYY-MM-DD"
                                v-bind="item.fieldAttr" />

                            <!-- 日期范围 -->
                            <el-date-picker v-else-if="item.fieldType === FilterEnum.DATE_RANGE" v-model="item.value"
                                type="datetimerange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"
                                format="YYYY-MM-DD HH:mm:ss" value-format="YYYY-MM-DD HH:mm:ss"
                                v-bind="item.fieldAttr" />

                            <!-- 开关 -->
                            <el-switch v-else-if="item.fieldType === FilterEnum.SWITCH" v-model="item.value"
                                v-bind="item.fieldAttr" />
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
                        <el-form-item>
                            <el-button type="primary" v-on:click="onFilterChange(true)">搜索</el-button>
                            <el-button v-on:click="onFilterChange(false)">重置</el-button>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        </section>
        <section style="margin-bottom: 15px;" v-if="toolBar.actions.length > 0">
            <template v-for="(item, i) in toolBar.actions" :key="i">
                <el-button v-if="store.hasPer(item.perKey)" :icon="item.icon" :type="item.type ?? ''"
                    @click="(e) => onToolBarEvent(item, e)" plain>
                    {{ item.label }}
                </el-button>
            </template>
        </section>
        <!--内容展示区-->
        <section>
            <el-table :data="dataTable" v-loading="tableAttr.loading" :row-key="tableAttr.dataKey"
                :default-expand-all="tableAttr.expandAll" stripe border element-loading-text="加载中..."
                element-loading-spinner="el-icon-loading" element-loading-background="rgba(255, 255, 255, 0.7)"
                style="width: 100%;">
                <el-table-column v-if="tableAttr.enabledDefaultColumn" :type="tableAttr.defaultColumnType" />
                <el-table-column v-for="(item, i) in tableColumns" :prop="item.field" :show-overflow-tooltip="true"
                    v-bind="item.attrs">
                    <template #default="scope" v-if="item.template && item.template !== undefined">
                        <LayoutPageColumn :template="item.template" :data="scope.row" />
                    </template>
                </el-table-column>
                <!--估计不支持style 需要单独处理样式相关的-->
                <el-table-column v-if="visibleActions.length > 0" :label="tableBar.title" :fixed="tableBar.position"
                    :width="tableBar.width || 'auto'" :align="tableBar.align">
                    <template #default="scope">
                        <template v-for="(action, a) in tableBar.actions" :key="a">
                            <el-button v-if="store.hasPer(action.perKey) && action._hideFunc(scope.row)"
                                :icon="action.icon" :type="action.type ?? 'primary'" size="small" link
                                @click="(e) => action._command(scope.row, e)">
                                {{ action.label }}
                            </el-button>
                        </template>
                    </template>
                </el-table-column>
            </el-table>
            <div style="display: flex; justify-content: flex-end; margin-top: 16px;">
                <el-pagination background layout="total, sizes, prev, pager, next" v-model:current-page="pageInfo.index"
                    :total="pageInfo.total" :page-size="pageInfo.size" :page-sizes="pageInfo.options"
                    @change="onPageChange" @size-change="onPageSizeChange" />
            </div>
        </section>
        <LayoutPageDialog ref="dialogRef" :dialog="dialog" />
    </div>
</template>

<style scoped>
:deep(.el-input-group__prepend) {
    padding: 0;
}
</style>