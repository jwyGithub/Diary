const chooseImgs = (count) => {
	return new Promise(resolve => {
		wx.chooseImage({
			count: count || 9,
			sizeType: ['original'],
			sourceType: ['album', 'camera'],
			success(res) {
				// tempFilePath可以作为img标签的src属性显示图片
				const tempFilePaths = res.tempFilePaths
				resolve(res.tempFilePaths)
			}
		})
	})
}

export default chooseImgs