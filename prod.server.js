var express = require('express')
var compression = require('compression')
var config = require('./config/index')
var axios = require('axios')

var port = process.env.PORT || config.build.port

var app = express()

var apiRoutes = express.Router()

app.get('/api/getFind', function(req, res) {
  const url = 'https://zhuanlan.zhihu.com/api/recommendations/posts'
  axios.get(url, {
    headers: {
      referer: 'https://zhuanlan.zhihu.com/',
      host: 'zhuanlan.zhihu.com'
    },
    params: req.query
  }).then((response) => {
    res.json(response.data)
  }).catch((e) => {
    console.log(e)
  })
})

app.get('/api/getColumn', function(req, res) {
  const url = 'https://zhuanlan.zhihu.com/api/recommendations/columns'
  axios.get(url, {
    headers: {
      referer: 'https://zhuanlan.zhihu.com/',
      host: 'zhuanlan.zhihu.com'
    },
    params: req.query
  }).then((response) => {
    res.json(response.data)
  }).catch((e) => {
    console.log(e)
  })
})

app.get('/api/getColumnDetail', function(req, res) {
  axios({
    method: 'get',
    url: `https://zhuanlan.zhihu.com/api/columns/${req.query.urlid}/posts`,
    headers: {
      referer: `https://zhuanlan.zhihu.com/${req.query.urlid}`,
      host: 'zhuanlan.zhihu.com'
    },
    params: req.query
  }).then((response) => {
    res.json(response.data)
  }).catch((e) => {
    console.log(e)
  })
})

app.use('/api', apiRoutes)

app.use(compression())

app.use(express.static('./dist'))

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:' + port + '\n')
})