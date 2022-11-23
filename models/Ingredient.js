const { model, Schema } = require('mongoose')

const ingredientSchema = new Schema({
    name: { type: String, required: true },
    description: {type: String, required: false},
    createdDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Ingredient", ingredientSchema);