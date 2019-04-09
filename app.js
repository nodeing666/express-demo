// 引入express
var express = require('express')
var path = require('path')
var app = express()
var bodyParser = require('body-parser')
var multer = require('multer')
var fs = require('fs')
var adminRouter = require('./router/admin/index')
var homeRouter = require('./router/home/index')
var ejs = require('ejs')
var body = require('./libs/body')
// 设置模板目录
app.set('views', path.join(__dirname, 'views'))
app.engine('html', ejs.__express)
app.set('view engine', 'html')

// app.use(bodyParser.urlencoded({extended: false}))  中间件本质：函数
app.use(body)

app.use('/admin', adminRouter)
app.use('/', homeRouter)


// static 是express内置中间件(插件)
/**
 * 
 * static 参数  设置静态文件的路径 你的静态文件放到哪个目录下 在这里就写这个目录
 * static  作用，监听你访问的是哪个静态文件  返回哪个静态文件
 * 
 * 前端发请求路径：   设置了静态文件目录为public
 * 前端                         服务端
 * http://localhost:3000/    --> ./public
 * http://localhost:3000/css/index.css        ./public/css/index.css
 * http://localhost:3000/img/bg.png           ./public/img/bg.png
 */
app.use(express.static('./public'))
// app.use(express.static('./static'))
// html 文件 模版文件   + 数据    静态文件(js css 图片)

// 监听端口
app.listen(3000, function (error) {
  console.log('listening on 3000')
})

