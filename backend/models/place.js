// const mongoose = require("mongoose");

// const Schema = mongoose.Schema;

// const placeSchema = new Schema({
//   title: { type: String, required: true },
//   description: { type: String, required: true },
//   image: { type: String, required: true },
//   address: { type: String, required: true },
//   location: {
//     lat: { type: Number, required: true },
//     lng: { type: Number, required: true },
//   },
//   // reviews: [{ type: mongoose.Types.ObjectId, required: true, ref: 'Review' }],
//   creator: { type: mongoose.Types.ObjectId, required: true, ref: "User" },
// });

// placeSchema.pre("remove", async function (next) {
//   try {
//     await Review.deleteMany({ placeId: this._id });
//     next();
//   } catch (err) {
//     next(err);
//   }
// });

// module.exports = mongoose.model("Place", placeSchema);
