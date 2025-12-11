<script setup>
import { reactive, ref, computed } from 'vue'
import LayoutFormItem from './layout-form-item.vue'

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

// form ref
const formRef = ref(null)
// localConfig
const localConfig = reactive(props.config ?? [])
// 配置和初始数据
const formData = reactive(props.data ?? {})
console.log(formData)
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
// 动态生成span大小
const getAutoSpan = (row, index) => {
    const count = row.filter(a => a.hideFunc(formData)).length
    const TOTAL = 24

    const base = Math.floor(TOTAL / count)
    const remain = TOTAL % count

    // 前 remain 个每个 +1
    return base + (index < remain ? 1 : 0)
}
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
    <el-form :model="formData" :rules="rules" ref="formRef" label-width="auto">
        <template v-for="(row, r) in localConfig" :key="r">
            <el-row>
                <el-col v-for="(item, c) in row" :key="item.field" :span="getAutoSpan(row, c)"
                    v-show="item.hideFunc(formData)">
                    <LayoutFormItem :item="item" :data="formData" />
                </el-col>
            </el-row>
        </template>
    </el-form>
</template>