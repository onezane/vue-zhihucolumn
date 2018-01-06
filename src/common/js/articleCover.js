export default class ArticleCover {
  constructor({image, title, time, authorname, avatarid, urlid, content, bio}) {
    this.image = this.setImage(image)
    this.title = title
    this.time = this.getDateDiff(this.getDateTimeStamp(time))
    this.authorname = authorname
    this.avatar = `https://pic2.zhimg.com/${avatarid}_s.jpg`
    this.avatarM = `https://pic2.zhimg.com/${avatarid}_m.jpg`

    this.urlid = urlid
    this.content = content
    this.bio = bio
  }

  setImage(image) {
    if (image === '') {
      image = require('common/image/no-image.png')
    }
    return image
  }

  // 转换标准时间为时间戳
  getDateTimeStamp(dateStr) {
    return Date.parse(dateStr)
  }
  // 将时间戳转换为几个月前，几周前，几天前，几分钟前的形式
  getDateDiff(dateTimeStamp) {
    var minute = 1000 * 60
    var hour = minute * 60
    var day = hour * 24
    // var halfamonth = day * 15
    var month = day * 30
    var now = new Date().getTime()
    var diffValue = now - dateTimeStamp
    if (diffValue < 0) { return }
    var monthC = diffValue / month
    // var weekC = diffValue / (7 * day)
    var dayC = diffValue / day
    var hourC = diffValue / hour
    var minC = diffValue / minute
    var result = ''
    if (monthC >= 1) {
      result = '' + parseInt(monthC) + '月前'
    // }
    // else if (weekC >= 1) {
    //   result = '' + parseInt(weekC) + '周前'
    } else if (dayC >= 1) {
      result = '' + parseInt(dayC) + '天前'
    } else if (hourC >= 1) {
      result = '' + parseInt(hourC) + '小时前'
    } else if (minC >= 1) {
      result = '' + parseInt(minC) + '分钟前'
    } else {
      result = '刚刚'
    }
    return result
  }
}