const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        title: {
            type: String,
        },

        price: {
            type: Number,
        },

        description: {
            type: String,
        },

        //This line adds a "createdAt" and "updatedAt" field when our document is created.
    },
    { timestamps: true }
);


const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
