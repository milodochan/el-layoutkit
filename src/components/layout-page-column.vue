<script setup>
import { computed } from 'vue'

const props = defineProps({
    template: [String, Object, Function],
    data: Object
})

function resolve(template, data) {
    if (typeof template === 'string') {
        return { type: 'html', content: template }
    } else if (typeof template === 'function') {
        const result = template(data)
        if (typeof result === 'string') {
            return { type: 'html', content: result }
        } else if (result?.component) {
            return { type: 'component', component: result.component, props: result.props || {}, content: result.content ?? null }
        } else {
            return { type: 'component', component: result, props: {}, content: null }
        }
    } else if (typeof template === 'object') {
        return { type: 'component', component: template, props: data, content: null }
    }

    console.warn('无效模板', template)
    return { type: 'html', content: '' }
}

const renderInfo = computed(() => resolve(props.template, props.data))
</script>

<template>
    <span v-if="renderInfo.type === 'html'" v-html="renderInfo.content" />
    <component v-else-if="renderInfo.type === 'component'" :is="renderInfo.component" v-bind="renderInfo.props">
        {{ renderInfo.content }}
    </component>
</template>
