export const getCard = () => {
	return new Promise((resolve) => {
		const value = wx.getStorageSync('cardList')
		value ? resolve(value) : resolve([])
	})
}

export const addCard = (obj = {}) => {
	return new Promise(resolve => {
		getCard().then(res => {
			res.push(obj)
			wx.setStorageSync('cardList', res)
			resolve()
		})
	})
}