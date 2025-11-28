import { reactive, readonly, ref } from 'vue'

export function useTableBar(keyMap) {
    // 列表工具栏
    const _tablebar_actions = ref([])
    const tablebar = reactive({
        title: '工具栏',
        width: '',
        align: 'center',
        position: 'right',// 另外一个 left
        actions: readonly(_tablebar_actions.value),
        register: (id, label, type = 'primary', icon, command = () => { }) => {
            const perKey = keyMap.getPer(id)
            const hideFunc = () => true
            _tablebar_actions.value.push({ id, perKey, label, icon, type, command, hideFunc })
            // 抽离共用
            const action = _tablebar_actions.value.find(a => a.id === id)
            return {
                ...action,
                // 重写 hideFunc
                hide(fn) {
                    action.hideFunc = fn
                    return this
                },
                on(fn) {
                    action.command = fn
                    return this
                }
            }
        },
        setTitle: (title) => { tablebar.title = title },
        setWidth: (width) => { tablebar.width = width },
        setAlign: (align) => { tablebar.align = align },
        setPosition: (position) => { tablebar.position = position },
        event(id, fn) {  //待删除
            id = keyMap.getPer(id)
            const action = _tablebar_actions.value.find(a => a.id === id)
            if (action) {
                action.command = fn
            } else {
                console.warn(`未找到 tablebar 动作 id = '${id}'`)
            }
        },
        get(id) {
            id = keyMap.getPer(id)
            const action = _tablebar_actions.value.find(a => a.id === id)
            if (!action) {
                console.warn(`未找到 tablebar 动作 id = '${id}'`)
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

    return tablebar
}
