import { ElMessage, ElMessageBox, ElNotification } from 'element-plus'

export function useMessage() {
    const message = {
        // ---------- 消息 ----------
        success: (content, placement = 'top', duration = 2000) => ElMessage({ message: content, type: 'success', duration, placement }),
        error: (content, placement = 'top', duration = 2000) => ElMessage({ message: content, type: 'error', duration, placement }),
        info: (content, placement = 'top', duration = 2000) => ElMessage({ message: content, type: 'info', duration, placement }),
        warning: (content, placement = 'top', duration = 2000) => ElMessage({ message: content, type: 'warning', duration, placement }),
        primary: (content, placement = 'top', duration = 2000) => ElMessage({ message: content, type: 'primary', duration, placement }),

        // ---------- 确认框 ----------
        confirm: (content, title = '提示', type = 'warning') => {
            return ElMessageBox.confirm(content, title, {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: type,
            })
        },
        // ---------- 通知 ----------
        notify: (content, title = '消息', type = '', duration = 0) => {
            ElNotification({
                title: title,
                message: content,
                duration: duration,
                type: type
            })
        }
    }

    return message
}
