var express = require('express')
var router = express.Router()

router.get('/user/list', function (req, res) {
  res.send('用户列表!!!!!')
})
router.get('/user/add/:id', function (req, res) {
  res.send('添加用户'+req.params.id)
})
router.get('/user/delete', function (req, res) {
  res.send('删除用户')
})
router.get('/user/edit', function (req, res) {
  res.send('更新用户')
})

module.exports = router