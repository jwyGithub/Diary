import {
	getDate,
	lunarDay,
	weekFormat,
} from '../../utils/index'
import chooseImg from '../../utils/chooseImg'
import {
	addCard
} from '../../apis/card'
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		time: "",
		lunarday: "",
		title: "",
		msg: "",
		defaultWether: "default",
		imgs: [],
		showActionsheet: false,
		show: false,
		groups: [{
				text: '晴天',
				value: 1,
				wether: 'sun'
			},
			{
				text: '有雨',
				value: 2,
				wether: 'rain',
			},
			{
				text: '有雾',
				value: 3,
				wether: 'wu',
			}
		],
	},
	onLoad: function (option) {
		this.setData({
			active: option.active || 1
		})
	},
	onReady: function () {
		const {
			_lunarMonth,
			_lunarday
		} = lunarDay()
		this.setData({
			time: getDate(new Date(), 'yyyy/MM/dd'),
			lunarday: _lunarMonth + '' + _lunarday
		})
	},
	bindTitle() {},
	selectWether() {
		this.setData({
			showActionsheet: !this.data.showActionsheet
		})
	},
	addImgs() {
		chooseImg(9).then(res => {
			this.setData({
				imgs: res
			})
		})
	},
	close: function () {
		this.setData({
			showActionsheet: false
		})
	},
	btnClick(e) {
		this.setData({
			defaultWether: this.wetherFormat(e.detail.value)
		})
		this.close()
	},
	onClick() {
		const _this = this
		addCard({
			day: getDate(new Date(), 'dd'),
			week: weekFormat(getDate(new Date(), 'w')),
			date: getDate(new Date(), 'yyyy年MM月dd日'),
			lunarday: this.data.lunarday,
			wether: this.data.defaultWether,
			title: this.data.title,
			content: this.data.msg,
			imgs: this.data.imgs
		}).then(() => {
			wx.showToast({
				title: '成功',
				icon: 'none',
				duration: 2000,
				success() {
					wx.navigateTo({
						url: `/pages/index/index?active=${_this.data.active}`,
					})
				}
			})


		})

	},
	wetherFormat(value) {
		switch (value) {
			case 1:
				return 'sun'
			case 2:
				return 'rain'
			case 3:
				return 'wu'
			default:
				break;
		}
	},
	selectDate() {
		this.setData({
			show: true
		})
	},
	dateSure(e) {
		console.log(e)
		this.setData({
			show: false
		})
	}

})