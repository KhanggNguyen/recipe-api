const { model, Schema } = require('mongoose')

const reviewSchema = new Schema({
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Recipe'
    },
    description: {
        type: String,
        required: true
    },
    star:{
        type: Number,
        required: true,
        min: 1,
        max: 10
    },
    updated: Date,
    created: {
        type: Date,
        default: Date.now,
    },
})

module.exports = mongoose.model("Review", reviewSchema);