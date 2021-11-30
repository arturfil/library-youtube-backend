const mongoose = require("mongoose");
const {model, Schema} = mongoose;

const RentalSchema = Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        book: {
            type: Schema.Types.ObjectId,
            ref: "Book",
            required: true
        }
    }
)

module.exports = model("Rental", RentalSchema);