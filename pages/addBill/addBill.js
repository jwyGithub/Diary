// pages/addBill/addBill.js
Page({


	data: {
		active: "",
		show: false,
		groups: [{
				text: '吃饭',
				value: 1,
			},
			{
				text: '淘宝',
				value: 2,
			},
			{
				text: '京东',
				value: 3,
			},
			{
				text: '拼多多',
				value: 4,
			},
			{
				text: '其它',
				value: 5,
			}
		]
	},


	onLoad: function (option) {
		this.setData({
			active: option.active || 1
		})
	},
	actiontap(e) {
		this.setData({
			show: false
		})
	}

})