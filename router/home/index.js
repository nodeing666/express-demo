var express = require('express')
var router = express.Router()
var path = require('path')

router.get('/', function (req, res) {
  // res.send('欢迎来的前台首页！！！')
  res.sendFile(path.resolve('./views/index.html'))
})

// router.get('/public/css/index.css', function (req, res) {
//   // 监听你访问的是哪个文件  返回哪个文件
//   res.sendFile(path.resolve('./public/css/index.css'))
// })
// router.get('/public/js/jquery.js', function (req, res) {
//   res.sendFile(path.resolve('./public/js/jquery.js'))
// })

//....
module.exports = router