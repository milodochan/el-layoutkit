<script setup>
import { ref, inject, computed, reactive } from 'vue'
import { FormEnum } from '../enum/FormEnum'

const props = defineProps({
    item: Object,
    data: Object
})

// 配置和初始数据
const formData = reactive(props.data ?? {})
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
const onEvent = (e, item) => {
    props.item.command(e, item, formData)
}
// 组件更新
const update = (val, item) => {
    formData[item.field] = val
    onEvent(val, item)
}
</script>

<template>
    <el-form-item :label="item.fieldAttr.label" :prop="item.field">
        <!-- ✅ 有 template：渲染动态组件, 此处判断是插槽还是组件  决定使用v-bind试试props -->
        <component v-if="component && !isSlot" :is="component" v-bind="formData" @update="(val) => update(val, item)" />
        <component v-if="component && isSlot" :is="component" :data="formData" :fieldAttr="item.fieldAttr"
            @update="(val) => update(val, item)" />

        <!-- 文本输入 -->
        <el-input v-else-if="item.fieldType === FormEnum.INPUT_TEXT" v-model="formData[item.field]"
            :placeholder="item.fieldAttr.placeholder" @input="(e) => onEvent(e, item)">
        </el-input>

        <!-- 文本域 -->
        <el-input v-else-if="item.fieldType === FormEnum.INPUT_TEXTAREA" type="textarea" v-model="formData[item.field]"
            :placeholder="item.fieldAttr.placeholder" :rows="item.fieldAttr.rows ?? 5"
            @input="(e) => onEvent(e, item)" />

        <!-- 数字 -->
        <el-input-number v-else-if="item.fieldType === FormEnum.INPUT_NUMBER" v-model="formData[item.field]"
            :step="item.fieldAttr.step ?? 0" :min="item.fieldAttr.min ?? 0" :max="item.fieldAttr.max ?? 10000"
            :precision="item.fieldAttr.precision ?? 0" @change="(e) => onEvent(e, item)" style="width:100%" />

        <!-- 日期 -->
        <el-date-picker v-else-if="item.fieldType === FormEnum.DATE_PICKER" v-model="formData[item.field]" type="date"
            :placeholder="item.fieldAttr.placeholder" @change="(e) => onEvent(e, item)" style="width:100%" />

        <!-- 时间 -->
        <el-time-picker v-else-if="item.fieldType === FormEnum.TIME_PICKER" v-model="formData[item.field]"
            @change="(e) => onEvent(e, item)" style="width:100%" />

        <!-- 单选 -->
        <el-radio-group v-else-if="item.fieldType === FormEnum.RADIO_BUTTON" v-model="formData[item.field]"
            @change="(e) => onEvent(e, item)">
            <el-radio v-for="opt in item.fieldAttr.options" :key="opt.value" :label="opt.value">
                {{ opt.label }}
            </el-radio>
        </el-radio-group>

        <!-- 多选 -->
        <el-checkbox-group v-else-if="item.fieldType === FormEnum.CHECKBOX" v-model="formData[item.field]"
            @change="(e) => onEvent(e, item)">
            <el-checkbox v-for="opt in item.fieldAttr.options" :key="opt.value" :label="opt.value">
                {{ opt.label }}
            </el-checkbox>
        </el-checkbox-group>

        <!-- 单选 or 多选 Select -->
        <el-select v-else-if="item.fieldType === FormEnum.SELECT" v-model="formData[item.field]"
            :multiple="item.attrFunc ? item.attrFunc(formData, item.fieldAttr)?.multiple ?? item.fieldAttr.multiple : item.fieldAttr.multiple"
            @change="(e) => onEvent(e, item)" style="width:100%">
            <el-option v-for="opt in item.fieldAttr.options" :key="opt.value" :label="opt.label" :value="opt.value" />
        </el-select>

        <!-- 树形结构 -->
        <el-tree-select v-else-if="item.fieldType === FormEnum.TREE_SELECT" v-model="formData[item.field]"
            :data="item.fieldAttr.options" :multiple="item.fieldAttr.multiple ?? true"
            :value-key="item.fieldAttr.props.value || 'id'" :show-checkbox="item.fieldAttr.showCheck ?? true"
            :render-after-expand="false" :props="item.fieldAttr.props" style="width:100%" check-strictly
            @change="(e) => onEvent(e, item)" />
        <!-- 开关 -->
        <el-switch v-else-if="item.fieldType === FormEnum.TOGGLE_BUTTON" v-model="formData[item.field]"
            @change="(e) => onEvent(e, item)" />

    </el-form-item>
</template>