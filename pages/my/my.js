import Dialog from '../../miniprogram_npm/@vant/weapp/dialog/dialog';

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
                    title: '警告',
                    message: '重置将会清除所有内容，请慎重选择',
                })
                .then(() => {
                    wx.clearStorageSync()
                    wx.reLaunch({
                        url: 'index'
                    })
                })
                .catch(() => {

                });

        }
    }
})