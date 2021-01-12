export const formatter = (type, value) => {
    switch (type) {
        case 'year':
            return `${value}年`
        case 'month':
            return `${value}月`
        case 'day':
            return `${value}日`
        case 'hour':
            return `${value}时`
        case 'minute':
            return `${value}分`
        default:
            return value
            break;
    }
}