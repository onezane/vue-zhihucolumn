import axios from 'axios'

const debug = process.env.NODE_ENV !== 'production'

export function getFind() {
  const url = debug ? '/api/getFind' : 'http://www.ygnili.com/api/getFind'
  const data = {
    limit: 5,
    offset: 1,
    seed: 50
  }

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getFindList() {
  const url = debug ? '/api/getFind' : 'http://www.ygnili.com/api/getFind'
  const data = {
    limit: 20,
    offset: 20,
    seed: 50
  }

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}