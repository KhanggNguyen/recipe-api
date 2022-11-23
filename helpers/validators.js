const Joi = require("joi");

const reviewValidate = (review) => {
    const reviewSchema = Joi.object().keys({
        description: Joi.string().required(),
        star: Joi.number().min(1).max(10).required(),
    });

    return reviewSchema.validate(review);
}

const ingredientValidate = (ingredient) => {
    const ingredientSchema = Joi.object().keys({
        name: Joi.string().required(),
        description: Joi.string(),
        quantity: Joi.number(),
        quantityType: Joi.string().required()
    });

    return ingredientSchema.validate(ingredient);
}

const recipeValidate = (recipe) => {
    const recipeSchema = Joi.object().keys({
        title: Joi.string().required(),
        cookTime: Joi.number().required(),
        prepTime: Joi.number().required(),
        serv: Joi.number().required(),
    });

    return recipeSchema.validate(recipe);
}

const addressesValidate = (addresses) => {
    const zipcodePattern = "(^d{5}$)|(^d{9}$)|(^d{5}-d{4}$)";

    const addressSchema = Joi.object().keys({
        number: Joi.number().required(),
        street: Joi.string().required(),
        city: Joi.string().required(),
        zipcode: Joi.string()
            .regex(zipcodePattern)
            .required(),
        country: Joi.string().required(),
    });

    addressesSchema = Joi.array().items(addressSchema);

    return addressesSchema.validate(addresses);
};

const userValidate = (data) => {
    const userSchema = Joi.object({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        userName: Joi.string()
            .min(8)
            .required(),
        email: Joi.string()
            .email()
            .lowercase()
            .required(),
        password: Joi.string()
            .min(8)
            .max(40)
            .required(),
        dateOfBirth: Joi.date(),
        gender: Joi.string().valid("MALE", "FEMALE", "OTHER"),
    });

    return userSchema.validate(data);
};

const userLoginValidate = (data) => {
    const loginSchema = Joi.object({
        email: Joi.string()
            .email()
            .lowercase()
            .required(),
        password: Joi.string()
            .min(8)
            .max(40)
            .required(),
    });

    return loginSchema.validate(data);
};

module.exports = {
    userValidate,
    userLoginValidate,
    addressesValidate,
    recipeValidate,
    ingredientValidate,
    reviewValidate
};
