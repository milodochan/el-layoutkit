import { reactive } from 'vue'

export function useDialogAttrs() {
    return reactive({
        // ---- 基础属性 ----
        title: '',                // 标题
        width: '50%',             // 宽度
        fullscreen: false,        // 全屏
        top: '15vh',              // 距顶部距离
        modal: true,              // 是否显示遮罩
        modalPenetrable: false,   // 是否允许穿透遮罩层。 modal 属性必须为 false
        modalClass: '',           // 遮罩的自定义类名
        headerClass: '',          // header 部分的自定义 class 名
        bodyClass: '',            // body 部分的自定义 class 名
        footerClass: '',          // footer 部分的自定义 class 名
        appendToBody: true,       // 是否插入到 body
        lockScroll: true,         // 锁定滚动
        openDelay: 0,             // 延迟打开
        closeDelay: 0,            // 延迟关闭
        closeOnClickModal: true,  // 点击遮罩关闭
        closeOnPressEscape: true, // ESC 关闭
        showClose: true,          // 是否显示关闭按钮
        draggable: false,         // 可拖拽
        overflow: false,          // 是否展示滚动条
        center: false,            // 标题居中
        alignCenter: false,       // 弹窗垂直居中
        destroyOnClose: true,     // 关闭销毁内容
        headerAriaLevel: '',      // header 的 aria-level 属性
        customClass: '',          // 对话框 class
        zIndex: null,                // z-index
    })
}