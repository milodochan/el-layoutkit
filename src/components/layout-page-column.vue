<script setup>
import { computed, inject, ref } from 'vue'

const props = defineProps({
    template: [String, Object, Function],
    data: Object
})

// 提供默认空 Map，防止 inject 失败
const isSlot = ref(false)
const columnSlotMap = inject('columnSlotMap', ref(new Map()))
function resolve(template, data) {
    let compType = typeof template
    if (compType === 'function') {
        const result = template(data)
        let comp = result?.component
        if (comp) {
            // 是字符串 key，尝试从 slotMap 查找组件
            if (typeof comp === 'string' && columnSlotMap.value.has(comp)) {
                isSlot.value = true
                comp = columnSlotMap.value.get(comp)
            }

            return { type: 'component', component: comp, props: result.props || {}, content: result.content ?? null }
        }
        else {
            return { type: 'html', content: String(result ?? '') }
        }
    }
    else {
        return { type: 'html', content: String(template ?? '') }
    }
}

const renderInfo = computed(() => resolve(props.template, props.data))
</script>

<template>
    <span v-if="renderInfo.type === 'html'" v-html="renderInfo.content" />
    <component v-else-if="renderInfo.type === 'component' && !isSlot" :is="renderInfo.component"
        v-bind="renderInfo.props">
        {{ renderInfo.content }}
    </component>
    <component v-else-if="renderInfo.type === 'component' && isSlot" :is="renderInfo.component"
        :props="renderInfo.props" :content="renderInfo.content" />
</template>
