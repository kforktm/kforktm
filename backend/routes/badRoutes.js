const express = require('express')
const router = express.Router()
const {getBadVideos, setBadVideo, deleteBadVideo} = require('../controllers/badController')

router.get('/', getBadVideos)

router.post("/", setBadVideo)

router.delete("/:id", deleteBadVideo)

module.exports = router