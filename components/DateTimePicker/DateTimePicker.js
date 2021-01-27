import {
	getDateObject
} from '../../utils/index'
Component({
	/**
	 * 组件的属性列表
	 */
	properties: {
		valueFormat: {
			type: String,
			value: 'yyyy-MM-dd hh:mm:ss'
		},
		show: Boolean
	},

	/**
	 * 组件的初始数据
	 */
	data: {
		years: [],
		months: [],
		days: [],
		hours: [],
		minutes: [],
		seconds: [],
		value: [51, 0, 25, 10, 50, 50]
	},
	lifetimes: {
		attached() {
			this.getYears();
			this.getMonths();
			this.getDaysOfMonth();
			this.getTime();
			this.setData({
				value: [...this.data.value]
			})
			this.setDefaultDate()
		},
	},
	/**
	 * 组件的方法列表
	 */
	methods: {
		getYears() {
			let _years = []
			for (let i = 0; i <= new Date().getFullYear() + 100 - 1970; i++) {
				_years.push(1970 + i);
			}
			this.setData({
				years: this.addEmpty(_years)
			})
		},
		getMonths() {
			let _months = []
			for (let i = 1; i <= 12; i++) {
				_months.push(this.addZero(i));
			}
			this.setData({
				months: this.addEmpty(_months)
			})
		},
		getDaysOfMonth(year, month) {
			year = year || new Date().getFullYear();
			month = month || new Date().getMonth() + 1;
			let _days = [];
			for (var j = 1; j <= new Date(year, month, 0).getDate(); j++) {
				_days.push(this.addZero(j));
			}
			this.setData({
				days: this.addEmpty(_days)
			})
		},
		getTime(minuteStep, secondStep) {
			minuteStep = minuteStep || 1;
			secondStep = secondStep || 1;
			let _hours = []
			let _minutes = []
			for (let hour = 0; hour <= 23; hour++) {
				_hours.push(this.addZero(hour));
			}
			this.setData({
				hours: this.addEmpty(_hours)
			})
			for (let minute = 0; minute <= 59; minute += minuteStep) {
				_minutes.push(this.addZero(minute));
			}
			this.setData({
				minutes: this.addEmpty(_minutes)
			})
			let _seconds = []
			for (let sec = 0; sec <= 59; sec += secondStep) {
				_seconds.push(this.addZero(sec));
			}
			this.setData({
				seconds: this.addEmpty(_seconds)
			})
		},
		dateChange(e) {
			var value = e.detail.value
			this.getDaysOfMonth(this.data.years[value[0]], this.data.months[value[1]]);
			this.setData({
				value
			})
		},
		dateCancel() {
			this.setData({
				show: false
			})
		},
		dateSure() {
			const _value = this.data.value
			const year = this.data.years[_value[0]]
			const month = this.data.months[_value[1]]
			const day = this.data.days[_value[2]]
			const hours = this.data.hours[_value[3]]
			const minute = this.data.minutes[_value[4]]
			const second = this.data.seconds[_value[5]]
			const selectValue = {
				year,
				month,
				day,
				hours,
				minute,
				second
			}
			this.triggerEvent('dateSure', selectValue)
		},
		addEmpty(arr) {
			return [...arr];
		},
		addZero(val) {
			return val < 10 ? '0' + val : val;
		},
		// 根据值查找index
		findIndex(arr, target) {
			return this.data[arr].findIndex(value => parseInt(value) === parseInt(target))
		},
		setDefaultDate() {
			const {
				year,
				month,
				day,
				hour,
				minute,
				second
			} = getDateObject()
			this.setData({
				value: [
					this.findIndex('years', year),
					this.findIndex('months', month),
					this.findIndex('days', day),
					this.findIndex('hours', hour),
					this.findIndex('minutes', minute),
					this.findIndex('seconds', second),
				]
			})

		}
	}
})