// components/StickyNotes/StickyNotes.js
Component({
	/**
	 * 组件的属性列表
	 */
	properties: {
		item: Object
	},

	/**
	 * 组件的初始数据
	 */
	data: {

	},
	lifetimes: {
		attached() {
			console.log(this.data.item)
		}
	},
	/**
	 * 组件的方法列表
	 */
	methods: {
		chooseImg(e) {
			this.triggerEvent('chooseImg', e.currentTarget.dataset.item)
		}
	}
})