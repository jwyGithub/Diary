// pages/home/home.js
import {
    getDate,
    formatDuring,
    keepOneDecimal
} from '../../utils/util'
Component({
    properties: {
        show: {
            type: Boolean,
            value: true
        }
    },
    data: {
        value: 0,
        count: 1,
        gradientColor: {
            '0%': '#ee0a24',
            '100%': '#ffd01e',
        },
        date: "",
        startTime: "",
        countDay: 0,
        _calcCountDay: "",
        application: [{
                title: '添加锻炼记录',
                type: "addRecords",
                img: "/pages/images/application/sport.png",
                url: "/pages/addRecords/addRecords"
            },
            {
                title: '秘密保险柜',
                type: "secretSafe",
                img: "/pages/images/application/secret.png",
                url: "/pages/secretSafe/secretSafe"
            }
        ]
    },
    lifetimes: {
        attached() {
            this.calcValue()
            this.calcCountDay();
            this.setData({
                date: getDate(new Date(), 'yyyy-MM-dd hh:mm:ss'),
                startTime: getDate(wx.getStorageSync('startTime'), 'yyyy-MM-dd hh:mm:ss')
            });
            this._calcCountDay = setInterval(() => {
                this.calcCountDay();
                this.showTime();
            }, 1000);
        },
        detached() {
            clearInterval(this._calcCountDay)
        }
    },
    methods: {
        calcValue() {
            if (formatDuring(new Date().getTime() - wx.getStorageSync('startTime')).days === 0 || this.data.count === 0) {
                this.setData({
                    value: 100
                })
            } else {
                this.setData({
                    value: keepOneDecimal((1 - (this.data.count / parseInt(formatDuring(new Date().getTime() - wx.getStorageSync('startTime')).days))) * 100)
                })

            }
        },
        // 实时
        showTime() {
            this.setData({
                date: getDate(new Date(), 'yyyy-MM-dd hh:mm:ss')
            })
        },
        // 计算累计天数
        calcCountDay() {
            this.setData({
                countDay: formatDuring(new Date().getTime() - wx.getStorageSync('startTime')).all
            })
        },

    }
})