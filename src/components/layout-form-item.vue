<script setup>
import { ref, inject, computed } from 'vue'
import { FormEnum } from '../enum/FormEnum'

const props = defineProps({
    item: Object,
    data: Object
})

// 配置和初始数据
const formData = props.data
const field = props.item?.field
const fieldType = props.item?.fieldType
const fieldAttr = computed(() => {
    const item = props.item
    const attrs = item?.fieldAttr
    if (item.attrFunc) {
        let newAttrs = item.attrFunc(formData, item.fieldAttr)
        Object.assign(attrs, newAttrs)
    }
    return attrs
})
// isSlot
const isSlot = ref(false)
// 提供默认空 Map，防止 inject 失败
const formSlotMap = inject('formSlotMap', ref(new Map()))
// 当前内容组件
const component = computed(() => {
    const comp = props.item.component
    if (!comp) return null

    // 真实组件对象 或者 defineAsyncComponent
    if (typeof comp === 'object' || typeof comp === 'function') {
        return comp
    }

    // 是字符串 key，尝试从 slotMap 查找组件
    if (typeof comp === 'string' && formSlotMap.value.has(comp)) {
        isSlot.value = true
        return formSlotMap.value.get(comp)
    }

    return null
})
// 表单组件事件
const onEvent = (val) => {
    props.item.command(val, props.item, formData)
}
// 组件更新
const update = (val, item) => {
    formData[item.field] = val
    onEvent(val)
}
</script>

<template>
    <el-form-item :label="fieldAttr.label" :prop="field">
        <!-- ✅ 有 template：渲染动态组件, 此处判断是插槽还是组件  决定使用v-bind试试props -->
        <component v-if="component" :is="component" @update="(val) => update(val)"
            v-bind="isSlot ? { data: formData, fieldAttr: fieldAttr } : formData" />

        <!-- 文本输入 -->
        <el-input v-else-if="fieldType === FormEnum.INPUT_TEXT" v-model="formData[field]" @input="(e) => onEvent(e)"
            v-bind="fieldAttr">
        </el-input>

        <!-- 文本域 -->
        <el-input v-else-if="fieldType === FormEnum.INPUT_TEXTAREA" type="textarea" v-model="formData[field]"
            @input="(e) => onEvent(e)" v-bind="fieldAttr" />

        <!-- 数字 -->
        <el-input-number v-else-if="fieldType === FormEnum.INPUT_NUMBER" v-model="formData[field]"
            @change="(e) => onEvent(e)" style="width:100%" v-bind="fieldAttr" />

        <!-- 日期 -->
        <el-date-picker v-else-if="fieldType === FormEnum.DATE_PICKER" v-model="formData[field]" type="date"
            @change="(e) => onEvent(e)" style="width:100%" v-bind="fieldAttr" />

        <!-- 时间 -->
        <el-time-picker v-else-if="fieldType === FormEnum.TIME_PICKER" v-model="formData[field]"
            @change="(e) => onEvent(e)" style="width:100%" v-bind="fieldAttr" />

        <!-- 单选 -->
        <el-radio-group v-else-if="fieldType === FormEnum.RADIO_BUTTON" v-model="formData[field]"
            @change="(e) => onEvent(e)" v-bind="fieldAttr">
            <el-radio v-for="opt in fieldAttr.options" :key="opt.value" :label="opt.value">
                {{ opt.label }}
            </el-radio>
        </el-radio-group>

        <!-- 多选 -->
        <el-checkbox-group v-else-if="fieldType === FormEnum.CHECKBOX" v-model="formData[field]"
            @change="(e) => onEvent(e)" v-bind="fieldAttr">
            <el-checkbox v-for="opt in fieldAttr.options" :key="opt.value" :label="opt.value">
                {{ opt.label }}
            </el-checkbox>
        </el-checkbox-group>

        <!-- 单选 or 多选 Select -->
        <el-select v-else-if="fieldType === FormEnum.SELECT" v-model="formData[field]" @change="(e) => onEvent(e)"
            style="width:100%" v-bind="fieldAttr">
            <el-option v-for="opt in fieldAttr.options" :key="opt.value" :label="opt.label" :value="opt.value" />
        </el-select>

        <!-- 树形结构 -->
        <el-tree-select v-else-if="fieldType === FormEnum.TREE_SELECT" v-model="formData[field]"
            :data="fieldAttr.options" :value-key="fieldAttr.valueKey || 'id'"
            :show-checkbox="fieldAttr.showCheck ?? true" :render-after-expand="false" :props="fieldAttr.props"
            style="width:100%" check-strictly @change="(e) => onEvent(e)" v-bind="fieldAttr" />
        <!-- 开关 -->
        <el-switch v-else-if="fieldType === FormEnum.TOGGLE_BUTTON" v-model="formData[field]"
            @change="(e) => onEvent(e)" v-bind="fieldAttr" />
    </el-form-item>
</template>