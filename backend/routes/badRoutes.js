const express = require('express')
const router = express.Router()
const {getBadVideos, setBadVideo, deleteBadVideo, updateBadVideo} = require('../controllers/badController')

router.get('/', getBadVideos)

router.post("/", setBadVideo)

router.put("/:id", updateBadVideo)

router.delete("/:id", deleteBadVideo)

module.exports = router