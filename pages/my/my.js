import Dialog from '../../miniprogram_npm/@vant/weapp/dialog/dialog'

Component({
    data: {
        headImg: "/pages/images/My/user.jpg"
    },
    methods: {
        afterRead(event) {
            this.setData({
                headImg: event.detail.file.url
            })
        },
        reset() {
            Dialog.confirm({
                context: this, //代表的当前页面
                selector: "#van-dialog", //选择器
                title: '警告',
                message: '重置会清除所有数据，请谨慎选择',
            }).then(() => {
                wx.clearStorageSync()
                wx.navigateTo({
                  url: 'index',
                })
            }).catch(() => {})

        }
    }
})