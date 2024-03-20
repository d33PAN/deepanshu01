const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, },
    vendor: { type: mongoose.Schema.Types.ObjectId, ref: 'Vendor' }
  }
);

module.exports = mongoose.model("Product",productSchema);