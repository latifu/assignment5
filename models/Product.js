const { Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide the product name."],
    },
    price: {
      type: Number,
      reuired: [true, "Please provide the price."],
    },
    quantity: {
      type: Number,
      default: 0,
    },
    description: String,
  },
  {
    timestamps: true,
  }
);
module.exports = model("Product", productSchema);
