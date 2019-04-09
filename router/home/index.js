var express = require('express')
var router = express.Router()
var path = require('path')

router.get('/', function (req, res) {
  // 在前面做一堆的数据处理
  var users = [
    {
      name: 'xiaoqiang',
      age: 123
    },
    {
      name: 'xiaoqiang2',
      age: 125
    },
    {
      name: 'xiaoqiang3',
      age: 124
    }, 
  ]
  // 把这个users 和 html文件 拼接  返回的就是这个已经拼接好的html文件

  // res.send('欢迎来的前台首页！！！')
  // res.sendFile(path.resolve('./views/index.html'))  html文件 叫做模板
  // 把数据 和 html模板 结合起来  返回给浏览器
  // render  第一个参数表示需要渲染的页面 去找模板目录下面的 第二个参数表示数据 数据中定义变量例如title
  res.render('index.html', {isLogin: true, title: '<h1>螺钉课堂</h1>', users: users})
})
router.get('/getinfo', function (req, res) {
  // 设置允许跨域访问
  res.header('Access-Control-Allow-Origin', '*')
  // 一堆逻辑  判断  去数据库拿数据 再处理
  /**
   * 特点： 数据没有和html产生关系
   */
  // 发送数据  数据接口     前后端分离方式
  var users = [
    {
      name: 'xiaoqiang',
      age: 123
    },
    {
      name: 'xiaoqiang2',
      age: 125
    },
    {
      name: 'xiaoqiang3',
      age: 124
    }, 
  ]

  res.send(users)
})

// router.get('/public/css/index.css', function (req, res) {
//   // 监听你访问的是哪个文件  返回哪个文件
//   res.sendFile(path.resolve('./public/css/index.css'))
// })
// router.get('/public/js/jquery.js', function (req, res) {
//   res.sendFile(path.resolve('./public/js/jquery.js'))
// })

//....
router.get('/include', function(req, res){

  res.render('include.html')
})

router.get('/middleware', function(req, res){
  res.render('middleware.html')
})

router.post('/middleware', function(req, res){
  console.log(req.body)
})

module.exports = router