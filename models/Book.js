const mongoose = require('mongoose');
const { model, Schema } = mongoose;

const BookSchema = Schema(
    {
        title: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        genre: {
            type: [],
            required: true
        },
        image: {
            type: String
        },
        numberOfPage: {
            type: Number
        }

    }
)

module.exports = model("Book", BookSchema)