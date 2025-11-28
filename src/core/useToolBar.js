import { reactive, readonly, ref } from 'vue'

export function useToolBar(keyMap) {
    const _toolbar_actions = ref([])
    const toolbar = reactive({
        actions: readonly(_toolbar_actions.value),
        register: (id, label, type = 'primary', icon = '', command = () => { }) => {
            const perKey = keyMap.getPer(id)
            _toolbar_actions.value.push({ id, perKey, label, icon, type, command })

            const action = _toolbar_actions.value.find(a => a.id === id)
            return {
                ...action,
                on(fn) {
                    action.command = fn
                    return this
                }
            }
        },
        event(id, fn) { //待删除
            id = keyMap.getPer(id)
            const action = _toolbar_actions.value.find(a => a.id === id)
            if (action) {
                action.command = fn
            } else {
                console.warn(`未找到 toolbar 动作 id = '${id}'`)
            }
        },
        get(id) {
            id = keyMap.getPer(id)
            const action = _toolbar_actions.value.find(a => a.id === id)
            if (!action) {
                console.warn(`未找到 toolbar 动作 id = '${id}'`)
                return {
                    on: () => { } // 空方法防止报错
                }
            }
            return {
                ...action,
                on(fn) {
                    action.command = fn
                    return this
                }
            }
        }
    })

    return toolbar
}
