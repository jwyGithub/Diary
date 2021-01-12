import { formatter } from '../../utils/formatter'
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast';

Page({
	data: {
		active: '',
		show: false,
		tabbarHeight: '0px',
		currentDate: new Date().getTime(),
		formatter: formatter,
		listShow: true
	},
	onLoad() {
		// 判断是否存在初始日期
		this.isExistStartTime();
	},
	isExistStartTime() {
		const startTime = wx.getStorageSync('startTime');
		if (!startTime) {
			this.setData({
				show: true
			})
		} else {
			this.setData({
				show: false
			})
			wx.createSelectorQuery().select('.tabbar').boundingClientRect().exec(res => {
				this.setData({ tabbarHeight: res[0].height + 'px', active: 0 })
			})
		}
	},
	confirm(value) {
		wx.setStorageSync('startTime', value.detail)
		Toast.success({
			type: 'success',
			message: '设置成功',
			onClose: () => {
				this.setData({
					show: false,
					active: 0
				})
			},
		});
	},
	changeActive(value) {
		this.setData({ active: value.detail.detail })
	}
});