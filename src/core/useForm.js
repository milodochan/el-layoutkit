import { FormEnum } from '../enum/FormEnum'
import { reactive, readonly, markRaw, ref, inject, provide } from 'vue'

export function useForm() {
  const _forms = ref([])

  const form = reactive({
    list: readonly(_forms.value),

    get(id) {
      const original = _forms.value.find(f => f.id === id)
      if (!original) return null

      return {
        id: original.id,
        data: JSON.parse(JSON.stringify(original.data)),
        config: JSON.parse(JSON.stringify(original.config)),
        setData(formData) {
          this.data = formData
          return this
        },
        setAttr(field, fn) {
          const fieldItem = this.config?.flat?.().find(a => a.field === field)
          if (fieldItem) fn(fieldItem.fieldAttr)
          return this
        }
      }
    },

    register(id = '') {
      id = id || `form_${Date.now()}_${_forms.value.length}`

      // 获取已有 map（若无则创建）
      let slotMapRef = inject('formSlotMap', null)

      if (!slotMapRef) {
        slotMapRef = ref(new Map())
        provide('formSlotMap', slotMapRef)
      }

      const existing = _forms.value.find(f => f.id === id)
      if (existing) return existing

      const obj = reactive({
        id,
        data: {},
        config: [],

        setRow() {
          const newRow = []
          this.config.push(newRow)

          const rowApi = {
            setColumn(label, field, callback) {
              const column = {
                field,
                fieldType: FormEnum.INPUT_TEXT,
                fieldAttr: {
                  label,
                  placeholder: `请输入${label}`,
                  require: false,
                  options: []
                },
                hideFunc: () => true,
                attrFunc: null,
                command: () => { }
              }

              newRow.push(column)

              const columnApi = {
                setOptions(options) { column.fieldAttr.options = options; return columnApi },
                setType(type) { column.fieldType = type; return columnApi },
                setPlaceholder(text) { column.fieldAttr.placeholder = text; return columnApi },
                onRequire() { column.fieldAttr.require = true; return columnApi },
                setAttr(attrs = {}) { Object.assign(column.fieldAttr, attrs); return columnApi },
                setComponent(comp) { if (comp) column.component = markRaw(comp); return columnApi },
                hide(fn) { column.hideFunc = fn; return columnApi },
                on(fn) { column.command = fn; return columnApi },
                change(fn) { column.attrFunc = fn; return columnApi },
                setColumn: rowApi.setColumn
              }

              if (typeof callback === 'function') {
                callback(columnApi)
                return rowApi
              }

              return columnApi
            }
          }

          return rowApi
        },

        setData(formData) {
          this.data = formData
          return this
        }
      })

      _forms.value.push(obj)
      return obj
    }
  })

  return form
}
