const mongoose = require("mongoose");
const user = require("./user");

const Schema = mongoose.Schema;

const reviewSchema = new Schema(
  {
    userId: { type: mongoose.Types.ObjectId, required: true, ref: "User" },
    placeId: { type: mongoose.Types.ObjectId, required: true, ref: "Place" },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Review", reviewSchema);
