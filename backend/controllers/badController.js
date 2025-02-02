const asyncHandler = require('express-async-handler')

const Video = require('../models/video')


const getBadVideos = asyncHandler(async (req, res) => {
    const badVideos = await Video.find()
    res.status(200).json(badVideos)
})


const setBadVideo = asyncHandler(async (req, res) => {
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


const updateBadVideo = asyncHandler(async (req, res) => {
    if(!req.body.location && !req.body.description){
        res.status(400)
        throw new Error('Please update description or location field')
    }

    const updatedVideo = await Video.findByIdAndUpdate(req.params.id, {
        description: req.body.description,
        location: req.body.location,
        tag: "bad"
    })


    res.status(200).json(updatedVideo)
})


const deleteBadVideo = asyncHandler(async (req, res) => {

    const deleteVideo = await Video.findById(req.params.id)

    if (!deleteVideo){
        res.status(404)
        throw new Error('Video not found')
    }

    await Video.remove()

    res.status(200).json({message: `Deleted Video ${req.params.id}`})
})


module.exports = {
    getBadVideos,
    setBadVideo,
    deleteBadVideo,
    updateBadVideo
}