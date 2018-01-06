import axios from 'axios'

export function getColumnDetail(urlid) {
  const url = `/api/getColumnDetail`
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