Page({
    data: {
        show: false,
        tabHeight: '',
        active: 2,
        tabList: [
            {
                index: 1,
                image: '/static/images/tab/note.png',
                activeImage: '/static/images/tab/note_active.png',
                text: '日记'
            },
            {
                index: 2,
                image: '/static/images/tab/course.png',
                activeImage: '/static/images/tab/course_active.png',
                text: '历程'
            },
            {
                index: 3,
                image: '/static/images/tab/bill.png',
                activeImage: '/static/images/tab/bill_active.png',
                text: '账单'
            },
            {
                index: 4,
                image: '/static/images/tab/my.png',
                activeImage: '/static/images/tab/my_active.png',
                text: '我的'
            }
        ]
    },
    changeTab(e) {
        this.setData({
            active: e.detail
        });
    },
    showPopup() {
        this.setData({
            show: true
        });
    },

    onLoad: function (options) {
        this.setData({
            active: options.active ? parseInt(options.active) : 2
        });
    },

    onReady: function () {
        let query = wx.createSelectorQuery();
        query
            .select('.tab')
            .boundingClientRect(rect => {
                this.setData({
                    tabHeight: rect.height + 'px'
                });
            })
            .exec();
    }
});
