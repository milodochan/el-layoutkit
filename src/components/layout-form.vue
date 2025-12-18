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
// 动态生成 rules
const rules = computed(() => {
    const r = {}
    props.config.flat().forEach((item) => {
        // 根据 hideFunc 判断字段是否显示，隐藏则不必填
        const visible = item.hideFunc ? item.hideFunc(formData) : true
        // 每个字段的验证规则数组
        const fieldRules = []
        if (item.fieldAttr.require && visible) {
            fieldRules.push({
                required: true,
                message: `${item.fieldAttr.label}为必填项`,
                trigger: 'blur'
            })

            // ② 合并 item.rules（外部传入的自定义规则）
            if (Array.isArray(item.rules)) {
                fieldRules.push(...item.rules)
            }

            r[item.field] = fieldRules
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
    <div>
        <el-form :model="formData" :rules="rules" ref="formRef" label-width="auto">
            <template v-for="(row, r) in localConfig" :key="r">
                <el-row :gutter="20">
                    <el-col v-for="(item, c) in row" :key="item.field" :span="getAutoSpan(row, c)"
                        v-show="item.hideFunc(formData)">
                        <LayoutFormItem :item="item" :data="formData" />
                    </el-col>
                </el-row>
            </template>
        </el-form>
    </div>
</template>