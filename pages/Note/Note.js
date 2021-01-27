import chooseImgs from '../../utils/chooseImg'
Component({
	/**
	 * 组件的属性列表
	 */
	properties: {

	},

	/**
	 * 组件的初始数据
	 */
	data: {
		noteList: [{
				id: 0,
				day: 20,
				week: '',
				time: "",
				wether: "",
				title: '',
				type: "img",
				mainImg: [],
				imgList: [
					''
				]
			},
			{
				id: 1,
				day: '',
				week: '',
				time: "",
				wether: "",
				title: '',
				type: "",
				text: ''
			}
		]
	},
	lifetimes: {
		attached() {
			this.setData({
				noteList: wx.getStorageSync('noteList') || []
			})
		}
	},
	/**
	 * 组件的方法列表
	 */
	methods: {
		changeDate(e) {
			console.log(e)
		},
		chooseImg(e) {
			chooseImgs(2).then(res => {
				let _noteList = this.data.noteList
				_noteList.forEach(item => {
					if (item.id === e.detail.id) {
						item.mainImg = res
					}
				})
				this.setData({
					noteList: _noteList
				})

				wx.setStorageSync('noteList', this.data.noteList)

			})
		}
	}
})