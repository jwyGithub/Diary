import {
	getDate
} from '../../utils/util'
import {
	formatter
} from '../../utils/formatter'
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast'
Page({
	data: {
		show: false,
		showDate: false,
		initType: '',
		initDate: getDate(new Date(), 'yyyy-MM-dd hh:mm'),
		currentDate: new Date().getTime(),
		formatter: formatter,
		actions: [{
				name: 'Secondary',
			},
			{
				name: 'Primitive',
			},
			{
				name: 'Watch',
			},
		],
	},
	onShow() {
		this.setData({
			initType: this.data.actions[0].name
		})
	},
	onCancel() {
		this.setData({
			show: false
		})
	},
	onClose() {
		this.setData({
			showDate: false
		})
	},
	selectType() {
		this.setData({
			show: true
		})
	},
	selectDate() {
		this.setData({
			showDate: true
		})
	},
	selectAction(event) {
		this.setData({
			initType: event.detail.name,
			show: false
		})
	},
	confirm(event) {
		this.setData({
			initDate: getDate(event.detail, 'yyyy-MM-dd hh:mm'),
			showDate: false
		})
	},
	define() {
		let dangeData = wx.getStorageSync('dangeData') || []
		dangeData.push({
			type: this.data.initType,
			time: this.data.initDate
		})
		wx.setStorageSync('dangeData', dangeData)
		Toast.success({
			type: 'success',
			message: '添加成功',
			onClose: () => {
				wx.navigateTo({
					url: '/pages/index/index',
				})
			},
		})

	}
})