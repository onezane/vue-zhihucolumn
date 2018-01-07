import axios from 'axios'

export function getColumn() {
  const url = '/api/getColumn'
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