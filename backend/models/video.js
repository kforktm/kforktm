const mongoose = require('mongoose')

const videoSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    description: {
        type: String,
        required: [true, 'Please add a text value']
    },
    location: {
        type: String,
        required: [true, 'Please add the location']
    },    
    postedBy: {
        type: String,
        required: [false]
    },
    tag: {
        type: String,
        oneOf: ["good", "bad", "excellent"]
    }
}, {
    timestamps: true,
})

module.exports = mongoose.model('Video', videoSchema)
