import axios from 'axios'

const debug = process.env.NODE_ENV !== 'production'

export function getColumn() {
  const url = debug ? '/api/getColumn' : 'http://www.ygnili.com/api/getColumn'
  const data = {
    limit: 20,
    offset: 6,
    seed: 7
  }
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}