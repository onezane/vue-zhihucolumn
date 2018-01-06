import axios from 'axios'

const debug = process.env.NODE_ENV !== 'production'

export function getColumnDetail(urlid) {
  const url = debug ? '/api/getColumnDetail' : 'http://www.ygnili.com/api/getColumnDetail'
  const data = {
    limit: 20,
    offset: 0,
    urlid: urlid
  }

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}