var express = require('express')
var router = express.Router()
var course = require('./course')
var user = require('./user')

router.use('/', user)
router.use('/', course)

module.exports = router