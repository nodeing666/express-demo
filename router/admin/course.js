var express = require('express')
var router = express.Router()
var path = require('path')

router.get('/course/list', function (req, res) {
  res.send('课程列表')
})
router.get('/course/add', function (req, res) {
  res.send('添加课程')
})
router.get('/course/delete', function (req, res) {
  res.send('删除课程')
})
router.get('/course/edit', function (req, res) {
  res.send('更新课程')
})

module.exports = router