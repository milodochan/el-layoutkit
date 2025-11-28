import { readonly, ref } from 'vue'

export function useKeyMap() {
    const _per_key_config = ref({})
    const keyMap = {
        permission: readonly(_per_key_config.value),
        registerPer: (key, value) => {
            _per_key_config.value[key] = value
        },
        getPer: (key) => _per_key_config.value[key]
    }

    return keyMap
}
