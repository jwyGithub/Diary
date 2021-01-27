Component({

	properties: {
		active: Number
	},

	data: {

	},


	methods: {
		addBill() {
			wx.navigateTo({
				url: `/pages/addBill/addBill?active=${this.data.active}`,
			})
		}
	}
})