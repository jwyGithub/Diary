// 支持哪种验证方式
const checkVerifySupport = () => {
	wx.checkIsSupportSoterAuthentication({
		success(res) {
			if (res.supportMode.length === 0) {
				return []
			} else {
				return res.supportMode
			}
		}
	})
}
// 是否录入了指纹
const isHaveVerify = (type) => {
	wx.checkIsSoterEnrolledInDevice({
		checkAuthMode: type,
		success(res) {
			return res.isEnrolled
		}
	})
}
// 安全验证
const securityVerify = () => {
	console.log(checkVerifySupport(), 'checkVerifySupport()')
	const _verify = checkVerifySupport()
	let _verifyArr = []
	_verify.forEach(type => {
		_verifyArr.push({
			type,
			status: isHaveVerify(type)
		})
	});
	return _verifyArr
}

export const startVerify = () => {
	return new Promise(resolve => {
		wx.startSoterAuthentication({
			requestAuthModes: ['fingerPrint', 'facial'],
			challenge: '123456',
			authContent: '请用指纹解锁',
			success(res) {
				resolve(res)
			}
		})
	})
}