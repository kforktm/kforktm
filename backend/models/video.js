const mongoose = require('mongoose')

const videoSchema = mongoose.Schema({
    description: {
        type: String,
        required: [false, 'Please add a text value']
    },
    location: {
        type: String,
        required: [true, 'Please add the location']
    },
    tag: {
        type: String,
        oneOf: ["good", "bad", "excellent"]
    }
}, {
    timestamps: true,
})

module.exports = mongoose.model('Video', videoSchema)
