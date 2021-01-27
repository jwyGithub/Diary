// components/Tab/Tab.js
Component({

	/**
	 * 组件的属性列表
	 */
	properties: {
		active: {
			type: Number,
			value: 1
		},
		tabList: {
			type: Array,
			value: {}
		}
	},

	/**
	 * 组件的初始数据
	 */
	data: {

	},

	/**
	 * 组件的方法列表
	 */
	methods: {
		changeTab(e) {
			this.triggerEvent('changeTab', e.currentTarget.dataset.item.index)
		}
	}
})