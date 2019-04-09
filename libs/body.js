var queryString = require('querystring')
function body(req, res, next){
  var arr = []
  // 功能： 获取到前端post方式发送过来的数据
  req.on('data', function(chunk, err){
    if(!err){
      arr.push(chunk)
    }
  })
  req.on('end', function(err){
    if(!err){
      // Buffer 二进制对象  
      req.body = queryString.parse(Buffer.concat(arr).toString())
      next()
    }
  })
}

module.exports = body