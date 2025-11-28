<script setup>
import { reactive, ref, computed } from 'vue'
import { FormEnum } from '../enum/FormEnum'

// 只接收一个表单数据对象
const props = defineProps({
    id: {
        type: String,
        default: ''
    },
    data: {
        type: Object,
        default: () => ({})
    },
    config: {
        type: Array,
        default: () => []
    },
})

// 配置和初始数据
const formData = reactive(props.data ?? {})

// 动态生成 rules
const rules = computed(() => {
    const r = {}
    props.config.flat().forEach((item) => {
        // 根据 hideFunc 判断字段是否显示，隐藏则不必填
        const visible = item.hideFunc ? item.hideFunc(formData) : true
        if (item.fieldAttr.require && visible) {
            r[item.field] = [{
                required: true,
                message: `${item.fieldAttr.label}为必填项`,
                trigger: 'blur'
            }]
        }
    })
    return r
})

// 表单组件事件
const onEvent = (e, item) => {
    item.command(e, item, formData)
}

const getAutoSpan = (row, index) => {
    const count = row.filter(a => a.hideFunc(formData)).length
    const TOTAL = 24

    const base = Math.floor(TOTAL / count)
    const remain = TOTAL % count

    // 前 remain 个每个 +1
    return base + (index < remain ? 1 : 0)
}

// form ref
const formRef = ref(null)
// 暴露componentRef
defineExpose({
    formRef,
    formData,
    valid: () => new Promise((resolve, reject) => {
        formRef.value?.validate((valid, fields) => {
            if (valid) resolve(true)
            else reject(fields)
        })
    }),
    reset: () => formRef.value?.resetFields()
})

</script>

<template>
    <el-form :model="formData" :rules="rules" ref="formRef" label-width="120px">
        <template v-for="(row, r) in config" :key="r">
            <el-row>
                <el-col v-for="(item, c) in row" :key="item.field" :span="getAutoSpan(row, c)"
                    v-show="item.hideFunc(formData)">
                    <el-form-item :label="item.fieldAttr.label" :prop="item.field">

                        <!-- ✅ 有 template：渲染动态组件 -->
                        <component v-if="item.component" :is="item.component" v-bind="formData" @update="(val) => {
                            formData[item.field] = val
                            onEvent(val, item)
                        }" />

                        <!-- 文本输入 -->
                        <el-input v-else-if="item.fieldType === FormEnum.INPUT_TEXT" v-model="formData[item.field]"
                            :placeholder="item.fieldAttr.placeholder" @input="(e) => onEvent(e, item)">
                        </el-input>

                        <!-- 文本域 -->
                        <el-input v-else-if="item.fieldType === FormEnum.INPUT_TEXTAREA" type="textarea"
                            v-model="formData[item.field]" :placeholder="item.fieldAttr.placeholder"
                            :rows="item.fieldAttr.rows ?? 5" @input="(e) => onEvent(e, item)" />

                        <!-- 数字 -->
                        <el-input-number v-else-if="item.fieldType === FormEnum.INPUT_NUMBER"
                            v-model="formData[item.field]" @change="(e) => onEvent(e, item)" style="width:100%" />

                        <!-- 日期 -->
                        <el-date-picker v-else-if="item.fieldType === FormEnum.DATE_PICKER"
                            v-model="formData[item.field]" type="date" :placeholder="item.fieldAttr.placeholder"
                            @change="(e) => onEvent(e, item)" style="width:100%" />

                        <!-- 时间 -->
                        <el-time-picker v-else-if="item.fieldType === FormEnum.TIME_PICKER"
                            v-model="formData[item.field]" @change="(e) => onEvent(e, item)" style="width:100%" />

                        <!-- 单选 -->
                        <el-radio-group v-else-if="item.fieldType === FormEnum.RADIO_BUTTON"
                            v-model="formData[item.field]" @change="(e) => onEvent(e, item)">
                            <el-radio v-for="opt in item.fieldAttr.options" :key="opt.value" :label="opt.value">
                                {{ opt.label }}
                            </el-radio>
                        </el-radio-group>

                        <!-- 多选 -->
                        <el-checkbox-group v-else-if="item.fieldType === FormEnum.CHECKBOX"
                            v-model="formData[item.field]" @change="(e) => onEvent(e, item)">
                            <el-checkbox v-for="opt in item.fieldAttr.options" :key="opt.value" :label="opt.value">
                                {{ opt.label }}
                            </el-checkbox>
                        </el-checkbox-group>

                        <!-- 单选 Select -->
                        <el-select v-else-if="item.fieldType === FormEnum.SELECT" v-model="formData[item.field]"
                            :placeholder="item.fieldAttr.placeholder" @change="(e) => onEvent(e, item)"
                            style="width:100%">
                            <el-option v-for="opt in item.fieldAttr.options" :key="opt.value" :label="opt.label"
                                :value="opt.value" />
                        </el-select>

                        <!-- 多选 Select -->
                        <el-select v-else-if="item.fieldType === FormEnum.MULTI_SELECT" v-model="formData[item.field]"
                            multiple @change="(e) => onEvent(e, item)" style="width:100%">
                            <el-option v-for="opt in item.fieldAttr.options" :key="opt.value" :label="opt.label"
                                :value="opt.value" />
                        </el-select>

                        <!-- 树形结构 -->
                        <el-tree-select v-else-if="item.fieldType === FormEnum.TREE_SELECT"
                            v-model="formData[item.field]" :data="item.fieldAttr.options"
                            :multiple="item.fieldAttr.multiple ?? true" :value-key="item.fieldAttr.props.value || 'id'"
                            :show-checkbox="item.fieldAttr.showCheck ?? true" :render-after-expand="false"
                            :props="item.fieldAttr.props" style="width:100%" check-strictly
                            @change="(e) => onEvent(e, item)" />
                        <!-- 开关 -->
                        <el-switch v-else-if="item.fieldType === FormEnum.TOGGLE_BUTTON" v-model="formData[item.field]"
                            @change="(e) => onEvent(e, item)" />

                    </el-form-item>
                </el-col>
            </el-row>
        </template>
    </el-form>
</template>