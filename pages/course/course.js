import {
	getCard
} from '../../apis/card'
Component({
	/**
	 * 组件的属性列表
	 */
	properties: {
		active: Number
	},

	/**
	 * 组件的初始数据
	 */
	data: {
		cardList: []
	},
	lifetimes: {
		attached() {
			getCard().then(res => {
				this.setData({
					cardList: res
				})
			})
		},
	},
	/**
	 * 组件的方法列表
	 */
	methods: {
		addCourse() {
			wx.navigateTo({
				url: `/pages/addCourse/addCourse?active=${this.data.active}`,
			})
		},
		onClick() {
			console.log(111)
		}
	}
})