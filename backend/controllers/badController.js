const asyncHandler = require('express-async-handler')

const Video = require('../models/video')

// @desc    Get Bad Videos
// @route   Get /api/bad
const getBadVideos = asyncHandler(async (req, res) => {
    const badVideos = await Video.find()
    res.status(200).json(badVideos)
})

// @desc    Set Bad Video
// @route   POST /api/bad
const setBadVideo = asyncHandler(async (req, res) => {
    console.log(req.body)
    if(!req.body.location){
        res.status(400)
        throw new Error('Please add description and location field')
    }

    const video = await Video.create({
        description: req.body.description,
        location: req.body.location,
        tag: "bad"
    })

  
    res.status(200).json(video)
})

// @desc    Delete Bad Video
// @route   DELETE /api/bad/:id
const deleteBadVideo = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Delete Bad Video'})
})


module.exports = {
    getBadVideos,
    setBadVideo,
    deleteBadVideo
}