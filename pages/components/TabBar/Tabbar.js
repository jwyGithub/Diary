// pages/components/Tabbar.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        active: Number,
    },

    /**
     * 组件的初始数据
     */
    data: {
        list: [
            {
                title: "首页",
                img: "/pages/images/navBar/home.png",
                imgSelect: "/pages/images/navBar/home_select.png"
            },
            {
                title: "列表",
                img: "/pages/images/navBar/list.png",
                imgSelect: "/pages/images/navBar/list_select.png"
            },
            {
                title: "我的",
                img: "/pages/images/navBar/my.png",
                imgSelect: "/pages/images/navBar/my_select.png"
            }
        ]
    },

    /**
     * 组件的方法列表
     */
    methods: {
        onChange(value) {
            this.triggerEvent('changeActive', value)
        }
    }
})
