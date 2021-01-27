import GetLunarDay from './lunarDay'
export const lunarDay = (solarYear, solarMonth, solarDay) => {
	solarYear = solarYear || new Date().getFullYear()
	solarMonth = solarMonth || new Date().getMonth() + 1
	solarDay = solarDay || new Date().getDate()
	return GetLunarDay(solarYear, solarMonth, solarDay)
}
export const getDate = (date, fmt = 'yyyy-MM-dd') => {
	date = new Date(date);
	var o = {
		'M+': date.getMonth() + 1, //月份
		'd+': date.getDate(), //日
		'h+': date.getHours(), //小时
		'm+': date.getMinutes(), //分
		's+': date.getSeconds(), //秒
		'w+': date.getDay(), //星期
		'q+': Math.floor((date.getMonth() + 3) / 3), //季度
		S: date.getMilliseconds() //毫秒
	};
	if (/(y+)/.test(fmt)) {
		fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
	}
	for (var k in o) {
		if (new RegExp('(' + k + ')').test(fmt)) {
			fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
		}
	}
	return fmt;
}

export const weekFormat = (value) => {
	const weekMap = new Map()
	weekMap.set('0', '周日')
	weekMap.set('1', '周一')
	weekMap.set('2', '周二')
	weekMap.set('3', '周三')
	weekMap.set('4', '周四')
	weekMap.set('5', '周五')
	weekMap.set('6', '周六')
	return weekMap.get(value)
}


export const getDateObject = () => {
	return {
		year: new Date().getFullYear(),
		month: new Date().getMonth() + 1,
		day: new Date().getDate(),
		hour: new Date().getHours(),
		minute: new Date().getMinutes(),
		second: new Date().getSeconds()
	}
}