const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Place = require("./place");
// const Review = require("./review");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 6 },
  image: { type: String, required: true },
  places: [{ type: mongoose.Types.ObjectId, required: true, ref: "Place" }],
  // reviews: [{ type: mongoose.Types.ObjectId, required: true, ref: "Review" }],
});

userSchema.pre("remove", async function (next) {
  try {
    await Place.deleteMany({ creator: this._id });
    // await Review.deleteMany({ userId: this._id });
    next();
  } catch (err) {
    next(err);
  }
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);
