import { reactive, markRaw, ref, inject, provide, toRaw } from 'vue'

export function useDialog() {
    const _dialogs = ref([])
    const dialog = reactive({
        instance: null,
        //dialogs: readonly(_dialogs.value),
        registerProvide(id, comp) {
            if (typeof id !== 'string') {
                console.warn(`[dialog] registerProvide: key 必须为 string，收到:`, id)
                return this
            }

            // 获取已有 map（若无则创建）
            let slotMapRef = inject('dialogSlotMap', null)
            if (!slotMapRef) {
                slotMapRef = ref(new Map())
                provide('dialogSlotMap', slotMapRef)
            }

            slotMapRef.value.set(id, markRaw(comp))
            return this
        },
        register(title) {
            const id = `${Date.now()}-${Math.random()}`
            const data = reactive({
                id,
                visible: false,
                loading: false,
                attrs: {
                    title: title || '',
                    alignCenter: false,
                    fullscreen: false,
                    draggable: false,
                    width: '50%',
                    center: false
                },
                component: null,
                propsData: {},
                withCancel: true,
                _actions: [],
                get actions() {
                    if (!this.withCancel) return this._actions
                    return [
                        ...this._actions,
                        {
                            label: '取消',
                            icon: '',
                            type: 'default',
                            loading: false,
                            command: () => { this.visible = false }
                        }
                    ]
                }
            })

            const get = () => data
            const disabledCancel = () => {
                data.withCancel = false
                return method
            }
            const setTitle = (title) => {
                data.attrs.title = title
                return method
            }
            const setAttr = (attrs = {}) => {
                if (typeof attrs !== 'object') return this
                Object.assign(data.attrs, attrs)
                return method
            }
            const setBtn = (label = '', command = () => { }, type = 'info', icon = '') => {
                const index = data._actions.findIndex(a => a.label === label)
                if (index > -1) {
                    data._actions[index] = { label, icon, type, loading: false, command }
                } else {
                    data._actions.push({ label, icon, type, loading: false, command })
                }
                return method
            }
            const setComponent = (comp, propsData) => {
                if (comp) {
                    data.component = markRaw(comp)
                }

                // 没有 propsData，直接结束
                if (!propsData) return method

                const resolvePropsData = async () => {
                    data.loading = true
                    try {
                        const result = typeof propsData === "function"
                            ? await propsData()
                            : propsData

                        data.propsData = result && typeof result === "object"
                            ? { ...toRaw(result) }
                            : {}
                    } catch (err) {
                        console.error("propsData 加载失败:", err)
                        data.propsData = {}
                    } finally {
                        data.loading = false
                    }
                }

                // 异步加载，不阻塞链式调用
                resolvePropsData()
                return method
            }
            const setForm = (propsData) => setComponent('form', propsData)
            const show = () => {
                data.visible = true
                dialog.instance = {
                    get, destroy, hide
                }
            }
            const hide = () => data.visible = false
            const destroy = () => {
                if (!dialog.instance) return
                // 关闭时重置数据
                if (data.propsData) {
                    Object.keys(data.propsData).forEach(k => data.propsData[k] = undefined)
                }
                // 关闭弹窗
                data.visible = false
                data.loading = false
            }

            const method = {
                show,
                hide,
                destroy,
                setTitle,
                setAttr,
                setBtn,
                setComponent,
                setForm,
                disabledCancel
            }
            _dialogs.value.push(data)
            return method
        }
    })

    return dialog
}
