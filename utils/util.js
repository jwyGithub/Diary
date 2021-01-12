export const getDate = (date, fmt) => {
  date = new Date(date);
  fmt = fmt || 'yyyy-MM-dd';
  var o = {
    'M+': date.getMonth() + 1, //月份
    'd+': date.getDate(), //日
    'h+': date.getHours(), //小时
    'm+': date.getMinutes(), //分
    's+': date.getSeconds(), //秒
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

export const formatDuring = (mss) => {
  var days = parseInt(mss / (1000 * 60 * 60 * 24));
  var hours = parseInt((mss % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = parseInt((mss % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = (mss % (1000 * 60)) / 1000;
  return {
    all: days + " 天 " + hours + " 小时 " + minutes + " 分钟 ",
    days,
    hours,
    minutes,
    seconds
  }
}

export const keepOneDecimal = (value) => {
  if (/\./g.test(value)) {
    return Number(value.toString().match(/^\d+(?:\.\d{0,2})?/));
  } else {
    return value;
  }
}

export const getRecords = () => {
  let records = wx.getStorageSync('records')
  return records ? records : []
}
export const setRecords = ({
  title,
  msg,
  time = new Date(),
  success
}) => {
  let records = wx.getStorageSync('records') || []
  records.push({
    title,
    msg,
    time: getDate(time, 'yyyy-MM-dd hh:mm')
  })
  wx.setStorageSync('records', records)
  success()
}