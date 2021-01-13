// pages/secretSafe/secretSafe.js
import {
	startVerify
} from '../../utils/securityVerify'
Page({
	data: {
		isShowPage: true,
		steps: [{
				text: '步骤一',
				desc: '描述信息',
				inactiveIcon: 'like-o',
				activeIcon: 'like-o',
			},
			{
				text: '步骤二',
				desc: '描述信息',
				inactiveIcon: 'like-o',
				activeIcon: 'like-o',
			},
			{
				text: '步骤三',
				desc: '描述信息',
				inactiveIcon: 'like-o',
				activeIcon: 'like-o',
			},
			{
				text: '步骤四',
				desc: '描述信息',
				inactiveIcon: 'like-o',
				activeIcon: 'like-o',
			},
		],
	},

	onReady: function () {
		startVerify().then(res => {
			this.setData({
				isShowPage: true
			})
		})
	},


})