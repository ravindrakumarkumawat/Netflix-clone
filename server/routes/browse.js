const express = require('express')
const router = express.Router()

const browse = require('../controllers/browse')

router.get('/', browse.get_videos)

module.exports = router