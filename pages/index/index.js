// pages/index/index.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		show: false,
		tabHeight: "",
		active: 2,
		tabList: [{
				index: 1,
				image: "/static/images/tab/note.png",
				activeImage: "/static/images/tab/note_active.png",
				text: "日记"
			},
			{
				index: 2,
				image: "/static/images/tab/course.png",
				activeImage: "/static/images/tab/course_active.png",
				text: "历程"
			},
			{
				index: 3,
				image: "/static/images/tab/bill.png",
				activeImage: "/static/images/tab/bill_active.png",
				text: "账单"
			},
			{
				index: 4,
				image: "/static/images/tab/my.png",
				activeImage: "/static/images/tab/my_active.png",
				text: "我的"
			},
		]
	},
	changeTab(e) {
		this.setData({
			active: e.detail
		})
	},
	showPopup() {
		this.setData({
			show: true
		})
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		this.setData({
			active: options.active ? parseInt(options.active) : 3
		})
	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {
		let query = wx.createSelectorQuery();
		query.select('.tab').boundingClientRect(rect => {
			this.setData({
				tabHeight: rect.height + 'px'
			})
		}).exec();
	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function () {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {

	}
})