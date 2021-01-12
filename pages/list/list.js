import {
    getDate,
    getRecords
} from '../../utils/util'
Component({
    data: {
        activeName: '1',
        records: []
    },
    lifetimes: {
        attached() {
            this.getRecordsList()
        }
    },
    methods: {
        getRecordsList() {
            this.setData({
                records: getRecords()
            })
        },
        onChange(event) {
            this.setData({
                activeName: event.detail,
            });
        },
    }
})