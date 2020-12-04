const mongoose = require("mongoose");

const cardSchema = mongoose.Schema({
    name: String,
    imgUrl: String
})

module.exports = Card = mongoose.model("cards", cardSchema)