# @layoutkit/el-layoutkit

`@layoutkit/el-layoutkit` 是一个基于elementplus ui的工厂函数，用于生成页面基础配置对象，提供表格、表单、对话框、工具栏、消息提示等功能，常用于后台管理系统页面。

# 安装（Installation）
```
npm install @layoutkit/el-layoutkit:latest
```

# 快速开始（Usage）

* 需要在项目中使用权限管理按钮等需要在main.js中设置
```js
app.config.globalProperties.$layoutkitPerEnabled = true
```
* 启用权限是，权限数据需要设置
```js
import { store } from '@layoutkit/el-layoutkit'
store.set(data)   // 请在登录系统后调用这个方法设置数据，数据格式要求未字符串数组
```
* 后端有自己的筛选数据格式时，支持重写数据格式， items只有筛选有内容时才有数据，默认未空数组
```js
app.config.globalProperties.$layoutkitBuildDataFunc = (items) => { return items }
```
* items数据结构
```js
[{
  field: '',              // 字段名
  fieldOperator: '=',     // 查询类型
  value: ''               // 查询值
}]
```
* 使用参考
```js

<script setup>
import { LayoutPage, useConfig } from '@layoutkit/el-layoutkit'

const { table, toolbar, tablebar, filter, dialog, formMap, keyMap, message, propsData } = useConfig()
</script>

<template>
    <div>
        <LayoutPage :table="table" :filter="filter" :toolbar="toolbar" :tablebar="tablebar" :dialog="dialog" />
    </div>
</template>

```
---

# API 文档（API）
## 1. table（表格）

`table` 提供表格数据、列、分页、加载事件等操作。

### 方法
#### `registerLoader(fn: Function)`

注册表格加载函数。

```js
table.registerLoader(async ({ index, size }, queryParams) => {
  return await api.getData({ index, size, ...queryParams })
})
```

#### `setColumn(field: string, title: string)`
添加表格列，支持链式调用。

```js
table.setColumn('name', '姓名').setAttr({ width: 150 }).setTemplate((row) => row.name)
```
* `setAttr(attrs: object)`
  设置列的属性，暂时只支持width字段
* `setTemplate(template: Function)`
  重写列的内容，支持返回一般内容以及使用组件返回
  ```js
  table.setColumn('field', 'nickname').setTemplate((item) => {
        return ''
        // or
        return {
            component: ElTag, // 传入的组件
            content: item, // 组件显示内容
            props: {}    // 透传属性
        }
    })
  ```

#### `setPageSize(size: number)`
设置分页大小。

#### `setPageOptions(options: array)`
设置分页选项。

#### `enableTree()`
启用树结构表格。

#### `showNumber()`
开启序号显示（暂时未实现）。

#### `setRowKey(dataKey: string)`
数据行的字段。

#### `setParentKey(dataKey: string)`
树结构表格数据行的父级字段。

#### `reload()`
重新加载表格，并将分页页码重置为 1。

---

## 2. filter（表格筛选）

`filter` 提供筛选字段注册。

### 属性

| 属性     | 类型          | 说明       |
| ------ | ----------- | -------- |
| `data` | ReadonlyRef | 当前筛选字段配置 |

### 方法

#### `register(field: string, label: string)`
注册筛选字段，返回字段对象，可链式设置属性。

```js
filter.register('name', '姓名')
  .setFieldType(FilterEnum.TEXT)
  .setPlaceholder('请输入姓名')
```

#### 字段方法

| 方法                               | 说明                     |
| -------------------------------- | ---------------------- |
| `setOptions(options: Array)`     | 设置下拉选项，自动切换为 SELECT 类型 |
| `setFieldType(type: FilterEnum)` | 设置字段类型，参考包中FilterEnum枚举                 |
| `setValue(val: any)`             | 设置默认值                  |
| `setOperator(operator: FilterOperatorEnum)`  | 设置查询操作符，参考包中FilterOperatorEnum枚举              |
| `setPlaceholder(text: string)`   | 设置输入提示                 |

#### `event(data: Object)`
触发筛选事件并重新加载表格。

```js
filter.event({ name: '张三' })
```

#### `registerBuildDataFunc(fn: Function)`
单页面可以重写筛选数据结构，此方法优先级高于全局$layoutkitBuildDataFunc方法。

```js
filter.registerBuildDataFunc((items) => { return items })
```

---

## 3. toolbar（页面工具栏）

`toolbar` 提供顶部工具栏注册和操作。

### 属性

| 属性        | 类型          | 说明        |
| --------- | ----------- | --------- |
| `actions` | ReadonlyRef | 当前注册的动作列表 |

### 方法

#### `register(id: string, label: string, type: string, icon: string, command: Function)`
注册动作按钮，返回链式操作对象, 参数type、icon、command不是必须传入的。

```js
toolbar.register('add', '新增', 'Plus', 'success')
  .on(() => {
    console.log('点击新增')
  })
```

* `on(fn: Function)`
  注册后提供的点击事件

---

## 4. tablebar（表格工具栏）

用法和 `toolbar` 类似，但针对表格操作按钮。

### 属性

| 属性         | 类型          | 说明               |
| ---------- | ----------- | ---------------- |
| `title`    | String      | 工具栏标题            |
| `width`    | String      | 工具栏宽度            |
| `align` | String      | 'right'、 'left'、'center'，默认：center |
| `position` | String      | 'right' 或 'left' |
| `actions`  | ReadonlyRef | 当前按钮列表           |

### 方法

同 `toolbar`，提供 `register`, `setTitle`, `setWidth`, `setAlign`, `setPosition`。

#### `register(id: string, label: string, type: string, icon: string,  command: Function)`
注册动作按钮，返回链式操作对象, 参数type、icon、command不是必须传入的。

```js
toolbar.register('add', '新增', 'Plus', 'success')
  .hide((item) => item.status === 1)
  .on(() => {
    console.log('点击新增')
  })
```
* `hide(fn: Function)`
  注册后提供回调方法，用于显示和隐藏此动作按钮, fn需返回true or false
* `on(fn: Function)`
  注册后提供的点击事件

---

## 5. dialog（弹窗管理）

### register(title)

注册一个弹窗实例，返回链式操作对象。

#### 属性

| 属性 | 类型 | 说明 |
|------|------|------|
| `key` | string | 弹窗唯一 key |
| `title` | string | 弹窗标题 |
| `width` | string | 弹窗宽度（默认 `'50%'`） |
| `loading` | boolean | 弹窗内容加载状态 |
| `fullscreen` | boolean | 是否全屏 |
| `draggable` | boolean | 是否可拖拽 |
| `visible` | boolean | 弹窗显示状态 |
| `component` | Component | 弹窗内容组件 |
| `propsData` | object | 组件 props |
| `withCancel` | boolean | 是否自动添加取消按钮 |
| `_actions` | Array | 内部动作按钮存储 |
| `actions` | Array | 动作按钮，自动生成取消按钮（如需） |

#### 链式方法

| 方法 | 参数 | 返回值 | 说明 |
|------|------|--------|------|
| `setTitle(title)` | string | 当前对象 | 设置标题 |
| `setAttr(attrs)` | object | 当前对象 | 批量设置属性，如 title、width、fullscreen、draggable、withCancel、center |
| `setBtn(label, command, type, icon)` | string, Function, string, string | 当前对象 | 添加或覆盖按钮 |
| `setComponent(comp, propsData)` | Component/Object/Function | 当前对象 | 设置弹窗组件及 propsData，支持异步 |
| `setForm(propsData)` | Object/Function | 当前对象 | 快速设置表单组件 |
| `show()` | - | 当前对象 | 显示弹窗并设置 dialog.instance |
| `hide()` | - | 当前对象 | 隐藏弹窗 |
| `destroy()` | - | - | 销毁弹窗，清空数据，重置 loading |

#### 动作按钮对象

| 属性 | 类型 | 说明 |
|------|------|------|
| `label` | string | 按钮文本 |
| `icon` | string | 图标 |
| `type` | string | 类型，默认 `'info'` |
| `command` | Function | 点击回调 |

#### 使用示例

```js
// 创建，使用表单的话，参考下节表单相关内容
const myDialog = dialog.register('')
  .setAttr({ width: '600px', fullscreen: false, draggable: true })
  .setBtn('保存', async () => {
      await saveUser(formMap.get('userForm').data)
  }, 'primary')
  .setForm({ name: '张三', age: 18 })
// 新增示例
myDialog.setTitle('新增用户').setForm({ }).show()
// 编辑示例
myDialog.setTitle('用户信息').setForm({ name: '张三', age: 21 }).show()
```

---

## 6. formMap（表单管理）
## 属性

### list

* 类型: `readonly(Array)`
* 描述: 当前所有注册表单的列表（只读）。

### register(id = '')

* 类型: `function`
* 描述: 注册一个新的表单实例。
* 参数:

  * `id` (可选): 表单唯一标识，不是必须传入。
* 返回值: 注册的表单对象。

#### 表单对象方法

* `setRow()` - 创建一个新行，返回 `rowApi`。

  ##### rowApi 方法

  * `setColumn(label, field, callback?)` - 在当前行创建一列。

    * `label`: 表单项标签。
    * `field`: 表单数据字段名。
    * `callback`: 可选，接收 `columnApi` 对象，可直接在回调中修改列属性。
    * 返回值:

      * 如果有 `callback`，返回 `rowApi`，可继续调用 `setColumn`。
      * 否则返回 `columnApi`，用于链式调用。

  ##### columnApi 方法

  * `setOptions(options)` - 设置选项列表。
  * `setType(type)` - 设置字段类型 (FormEnum)。
  * `setPlaceholder(text)` - 设置占位符文本。
  * `onRequire()` - 设置必填字段。
  * `setAttr(attrs)` - 批量设置字段属性。
  * `setComponent(comp)` - 使用自定义组件。
    ```js
    # comp组件编写要求
    # 参数接收，会传入整个表单的对象，解析需要处理的即可；
    # 例如表单对象为：{ name：'', icon: '' }
    defineProps({
      icon: String   
    })
    # 回传需要定义
    const emit = defineEmits(['update'])
    # 修改的值需要回传
    const iconValue = ref('')
    emit('update', iconValue.value)
    ```
  * `hide(fn)` - 组件隐藏回调方法。
  * `on(fn)` - 组件事件。
  * `setColumn()` - 链式继续创建列。

```js
const testForm = formMap.register('userForm')
testForm.setRow()
    .setColumn('姓名', 'name', col => col.setPlaceholder('请输入姓名').onRequire())
    .setColumn('性别', 'gender', col => col.setType(FormEnum.SELECT).setOptions([{label:'男', value:'M'}, {label:'女', value:'F'}]))
```

* `setData(formData)` - 设置整个表单的数据。

```js
testForm.setData({ name: 'Bob', gender: 'M' })
```

* `formData` - 表单实例返回数据，详见最后的示例


完整示例

```js
const { formMap, FormEnum } = createBaseConfig()

// 注册表单
const userForm = formMap.register('userForm')

// 创建行列
userForm.setRow()
    .setColumn('姓名', 'name', col => col.setPlaceholder('请输入姓名').onRequire())
    .setColumn('性别', 'gender', col => col.setType(FormEnum.SELECT).setOptions([
        { label: '男', value: 'M' },
        { label: '女', value: 'F' }
    ]))

// 设置表单数据
userForm.setData({ name: 'Alice', gender: 'F' })

// 获取克隆副本
const clonedForm = formMap.get('userForm')
clonedForm.setData({ name: 'Bob' })
```

---

## 7. keyMap（全局 key 注册管理）

用于存储和获取权限、表单、对话框等 key 映射。

### 方法

| 方法                           | 说明       |
| ---------------------------- | -------- |
| `registerPer(key, value)`    | 注册权限 key |
| `getPer(key)`                | 获取权限 key |

---

## 8. message（消息提示与弹窗）

### 消息提示

```js
message.success('操作成功')
message.error('操作失败')
message.info('信息提示')
message.warning('警告提示')
```

### 弹窗提示

```js
await message.confirm('确定删除吗？')
await message.notify('操作完成', '提示')
```

---

## 9. 枚举对象

### FormEnum

```ts
FormEnum = {
  INPUT_TEXT: 'input_text',
  INPUT_TEXTAREA: 'input_textarea',
  INPUT_NUMBER: 'input_number',
  DATE_PICKER: 'date_picker',
  TIME_PICKER: 'time_picker',
  RADIO_BUTTON: 'radio',
  CHECKBOX: 'checkbox',
  SELECT: 'select',
  MULTI_SELECT: 'multi_select',
  TOGGLE_BUTTON: 'toggle',
  SEGMENTED: 'segmented'
}
```

### FilterEnum

```ts
FilterEnum = {
  TEXT: 'text',
  SELECT: 'select',
  DATE: 'date',
  NUMBER: 'number'
}
```

### FilterOperatorEnum

```ts
FilterOperatorEnum = {
  EQUAL: "=",              // 等于
  NOT_EQUAL: "!=",         // 不等于
  GREATER: ">",            // 大于
  LESS: "<",               // 小于
  GREATER_EQUAL: ">=",     // 大于等于
  LESS_EQUAL: "<=",        // 小于等于
  IS_NULL: "isNull",       // IS NULL
  IS_NOT_NULL: "isNotNull",// IS NOT NULL
  LIKE: "like",            // LIKE
  NOT_LIKE: "notLike",     // NOT LIKE
  IN: "in",                // IN
  NOT_IN: "notIn",         // NOT IN
  OR: "or",                // OR
}
```

---

## 10. 使用示例

```js
const { table, tablebar, filter, toolbar, formMap, dialog, message } = useConfig()

// 注册表单
const userForm = formMap.register('userForm')
userForm.setRow()
  .setColumn('姓名', 'name')
  .setColumn('年龄', 'age', col => col.setType(FormEnum.INPUT_NUMBER).onRequire())

// 筛选部分
filter.register('name', '姓名')
filter.register('age', '年龄')

// dialog
const userDialog = dialog.register('')
            .setAttr({ width: '600px' })
            .setBtn('保存', async (currentDialog, componentRef) => {
                try {
                    // 表单验证
                    await componentRef.valid()  
                    // 调用接口
                    const formData = componentRef.formData
                    formData.id 
                      ? await api.addUser(componentRef.formData) 
                      : await api.updateUser(componentRef.formData)
                    currentDialog.hide()
                    message.success('保存成功')
                    table.reload()
                } catch (e) {
                    console.log('表单校验未通过', e)
                }
            }, 'primary')

// 工具栏
toolbar.register('add', '添加').on(async () => {
    userForm.setData({ name: '', age: 0 })
    userDialog.setTitle('添加用户').setForm(userForm).show()
})

// table工具栏
tablebar.register('editRemark', '编辑').on((item) => {
    userForm.setData(item)
    userDialog.setTitle('编辑用户').setForm(userForm).show()
})

// 表格加载
table.registerLoader(async ({ index, size }) => {
  const res = await api.getUsers({ page: index, size })
  return { records: res.data, total: res.total }
})
```