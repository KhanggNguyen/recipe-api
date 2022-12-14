const { model, Schema } = require('mongoose')

const recipeSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    cookTime: {
        type: Number,
        required: true
    },
    prepTime:{
        type: Number,
        required: true
    },
    serv: {
        type: Number,
        required: true,
    },
    nutritionFacts: [
        {
            name: {
                type: String,
                required: true
            },
            amount: {
                type: Number,
                required: true
            }
        }
    ],
    ingredients: [
        {
            name: { type: String, required: true},
            description: {type: String, required: false},
            quantity: {type: Number, required: false},
            quantityType: {type: String, required: true}
        }
    ],
    description: [
        {
            step: { type: Number, required: true },
            content: { type: String, required: true }
        }
    ],
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Review'
        }
    ],
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true
    },
    updated: Date,
    created: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Recipe", recipeSchema);
