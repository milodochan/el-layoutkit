import { reactive, readonly, ref, getCurrentInstance } from 'vue'
import { FilterEnum } from '../enum/FilterEnum'

export function useFilter() {
    const _filter = ref([])
    const instance = getCurrentInstance()
    const globalBuildDataFunc = instance?.appContext.config.globalProperties.$layoutkitBuildDataFunc

    const filter = reactive({
        _overrideBuildFunc: null,
        data: readonly(_filter.value),
        _buildFunc: (items) => {
            if (filter._overrideBuildFunc && typeof filter._overrideBuildFunc === 'function') {
                return filter._overrideBuildFunc(items)
            }

            if (globalBuildDataFunc && typeof globalBuildDataFunc === 'function') {
                return globalBuildDataFunc(items)
            }

            return Object.fromEntries(
                items.map(item => [item.field, item.value])
            )
        },
        register: (field, label) => {
            const item = {
                field, label,
                fieldType: FilterEnum.TEXT,
                fieldOperator: '=',
                value: '',
                placeholder: '' || `请输入${label}`,
                options: [],
                style: undefined,
                required: false,
                setOptions(options) {
                    this.fieldType = FilterEnum.SELECT
                    this.options = options
                    return this
                },
                setStyle(style) {
                    this.style = style
                    return this
                },
                setFieldType(type) {
                    this.fieldType = type
                    return this
                },
                setValue(val) {
                    this.value = val
                    return this
                },
                setOperator(operator) {
                    this.fieldOperator = operator
                    return this
                },
                setPlaceholder(placeholder) {
                    this.placeholder = placeholder
                    return this
                },
                onRequire() { this.required = true; return this }
            }
            _filter.value.push(item)
            return item
        },
        registerBuildDataFunc: (fn) => {
            if (fn && typeof fn === 'function') {
                filter._overrideBuildFunc = fn
            }
        }
    })

    return filter
}
