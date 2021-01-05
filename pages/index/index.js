import { getDate, formatDuring } from "../../utils/util";
const fs = wx.getFileSystemManager()
//获取应用实例
const app = getApp()
Page({
  data: {
    isHaveFirstTime: false,
    date: "",
    firstRunTime: "",
    countDay: 0
  },

  onLoad: function () {
    // console.log(wx.env.USER_DATA_PATH)
    // fs.writeFileSync(`${wx.env.USER_DATA_PATH}/records.json`,{
    //   "date": "2020-01-01"
    // },'utf8')
    // console.log(fs.readFileSync(`${wx.env.USER_DATA_PATH}/records.json`,'utf8'))
    this.getFirstTime()
    this.setData({
      date: getDate()
    })
  },
  getFirstTime() {
    const firstRunTime = wx.getStorageSync('firstRunTime');
    if (!firstRunTime) {
      this.setData({
        isHaveFirstTime: true
      })
    } else {
      this.setData({
        isHaveFirstTime: false
      })
      this.setData({
        firstRunTime: firstRunTime
      })
      // 设置总共天数
      setInterval(()=>{
        this.countDayFn()
      }, 1000);
    }
  },
  countDayFn() {
    const countDay = new Date().getTime() - new Date(this.data.firstRunTime).getTime()
    this.setData({
      countDay: formatDuring(countDay)
    })
  },
  define(data) {
    if (!data.detail) {
      wx.showToast({
        title: '请设置开始时间',
        icon: 'none',
        mask: true
      })
    } else {
      this.setData({
        firstRunTime: data.detail
      })
      wx.setStorageSync('firstRunTime', data.detail);
      this.setData({
        isHaveFirstTime: false
      })
      setInterval(()=>{
        this.countDayFn()
      }, 1000);
    }
  }



})
