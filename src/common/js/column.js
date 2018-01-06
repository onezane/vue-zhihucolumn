export default class Column {
  constructor({id, title, describe, urlid}) {
    this.image = `https://pic2.zhimg.com/${id}_m.jpg`
    this.title = title
    this.describe = describe

    this.urlid = urlid
  }
}