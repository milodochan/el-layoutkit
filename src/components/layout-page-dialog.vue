<script setup>
import { computed, inject, ref, watch, toRaw } from 'vue'
import { useDialogAttrs } from '../core/useAttrs'

const componentRef = ref(null)
const dialogKey = ref(`${Date.now()}-${Math.random()}`)
const dialogAttrs = useDialogAttrs()
const props = defineProps({
    propsData: Object,
    dialog: {
        type: Object,
        default: () => []
    }
})

const instance = computed(() => props.dialog.instance)
const data = computed(() => instance.value?.get())

const visible = computed({
    get: () => data.value?.visible ?? false,
    set: (val) => emits('update:visible', val)
})

const attrs = computed(() => {
    const base = { ...dialogAttrs }         // reactive copy
    const ext = data.value?.attrs || {} // 外部传入的 attrs

    for (const key in ext) {
        if (key in base) {
            base[key] = ext[key]               // 只覆盖存在的属性
        }
    }
    return base
})

const emits = defineEmits(['update:visible'])

// 提供默认空 Map，防止 inject 失败
const dialogSlotMap = inject('dialogSlotMap', ref(new Map()))

// 当前内容组件
const currentComponent = computed(() => {
    const comp = data.value?.component
    if (!comp) return null

    // 真实组件对象 或者 defineAsyncComponent
    if (typeof comp === 'object' || typeof comp === 'function') {
        return comp
    }

    // 是字符串 key，尝试从 slotMap 查找组件
    if (typeof comp === 'string' && dialogSlotMap.value.has(comp)) {
        return dialogSlotMap.value.get(comp)
    }
})

const safePropsData = computed(() => {
    dialogKey.value = `${Date.now()}-${Math.random()}`
    if (!data.value?.propsData) return {}
    // 剥离 reactive 和 proxy，转换为普通对象
    const raw = toRaw(data.value.propsData)
    const { key, ...rest } = raw // 如果有 key 强制剔除
    return rest
})

const destroy = () => {
    instance.value?.destroy()
}

const actionCommands = async (item) => {
    if (!item || typeof item.command !== 'function') return

    item.loading = true  // 打开按钮 loading

    try {
        const result = item.command(instance.value, componentRef.value)  // 执行函数, 此处考虑可以获取组件的参数
        // 如果返回 Promise，等待完成
        if (result instanceof Promise) {
            await result
        }
    } catch (e) {
        console.error('事件执行失败:', e)
    } finally {
        item.loading = false // 关闭按钮 loading
    }
}

// 监听 visible，当弹窗关闭时清空按钮
watch(() => visible, (val) => {
    if (!val) {
        actions.value = []
    }
})
</script>

<template>
    <div>
        <el-dialog v-model="visible" @close="destroy()" v-bind="attrs">
            <!-- 内容区域：元素 Plus 官方 loading -->
            <div v-loading="data?.loading" element-loading-text="加载中..."
                element-loading-background="rgba(255, 255, 255, 0.7)" style="min-height: 150px;">
                <component :key="dialogKey" ref="componentRef" v-if="currentComponent" :is="currentComponent"
                    v-bind="safePropsData" />

                <div v-else class="text-gray-400 text-sm text-center p-4">
                    ⚠️ 无内容可展示，请检查 component 是否传入正确。
                </div>
            </div>
            <template #footer>
                <div class="dialog-footer">
                    <!--item.key  为取消按钮时  返回true-->
                    <template v-for="(item, i) in data?.actions ?? []" :key="i">
                        <el-button :type="item.type" :icon="item.icon" :loading="item.loading"
                            @click="actionCommands(item)">
                            {{ item.label }}
                        </el-button>
                    </template>
                </div>
            </template>
        </el-dialog>
    </div>
</template>