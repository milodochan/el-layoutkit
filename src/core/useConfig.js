import { reactive, readonly, ref, watch } from 'vue'
import LayoutForm from '../components/layout-form.vue'
import { useDialog } from './useDialog'
import { useForm } from './useForm'
import { userMessage } from './userMessage'
import { useTable } from './useTable'
import { useFilter } from './useFilter'
import { useToolBar } from './useToolBar'
import { useTableBar } from './useTableBar'
import { useKeyMap } from './useKeyMap'

export function useConfig() {
    // keyMap
    const keyMap = useKeyMap()
    // 工具栏
    const toolbar = useToolBar(keyMap)
    // 列表工具栏
    const tablebar = useTableBar(keyMap)
    // 表格属性设置
    const table = useTable()
    // 表格筛选
    const filter = useFilter()
    // 表单
    const formMap = useForm()
    // 消息和确认框
    const message = userMessage()
    // dialog
    const dialog = useDialog()
    dialog.registerProvide('form', LayoutForm)
    // 参数
    const _params_data = ref({})
    const propsData = reactive({
        setData(data) {
            if (typeof data === 'object' && data !== null) {
                Object.keys(data).forEach(k => {
                    _params_data.value[k] = data[k]
                })
            }
            return this
        },
        getData() {
            return readonly(_params_data.value)
        },
        watch(callback, options = {}) {
            return watch(() => toRaw(_params_data.value), callback, { deep: true, ...options })
        }
    })

    return { table, toolbar, tablebar, filter, dialog, formMap, keyMap, message, propsData }
}