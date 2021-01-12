import Notify from '../../miniprogram_npm/@vant/weapp/notify/notify';
import {
    setRecords
} from '../../utils/util'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        value: "",
        msg: ""
    },
    define() {
        const _this = this
        if (!this.data.value) {
            Notify({
                type: 'primary',
                message: '请输入记录标题'
            });
            return
        }
        if (!this.data.msg) {
            Notify({
                type: 'primary',
                message: '请输入记录内容'
            });
            return
        }
        setRecords({
            title: this.data.value,
            msg: this.data.msg,
            success() {
                Notify({
                    type: 'primary',
                    message: '添加成功'
                });
                _this.setData({
                    value: "",
                    msg: ""
                })
            }
        })

    }

})