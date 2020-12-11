const express = require('express')
const router = express.Router()

const userController = require('../controller/users')

router.route('/')
    .get(userController.index)

    .put()
    .post()
    .patch()
    .delete()

module.exports = router