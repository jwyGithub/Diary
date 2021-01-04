import { getDate, msToTime } from "../../utils/util";
//获取应用实例
const app = getApp()
Page({
  data: {
    date: "",
    firstRunTime: "",
    countDay: 0
  },

  onLoad: function () {
    this.setData({
      date: getDate()
    })
    const firstRunTime = wx.getStorageSync('firstRunTime');
    this.setData({
      firstRunTime: firstRunTime
    })
    // 设置总共天数
    this.countDayFn();
  },
  countDayFn() {
    const countDay = new Date(this.data.date).getTime() - new Date(this.data.firstRunTime).getTime()
    this.setData({
      countDay: msToTime(countDay)
    })
  }



})
