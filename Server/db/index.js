const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  foodName: String,
  description: String,
  price: Number,
  imageLink: String,
});

const userSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  username: String,
  password: String,
  foodOrdered: [foodSchema],
});

const adminSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  username: String,
  password: String,
});

const restroSchema = new mongoose.Schema({
  title: String,
  description: String,
  rating: String,
  offer: String,
  distance: Number,
  imageURL: String,
  foodList: [foodSchema],
});

const User = mongoose.model("User", userSchema);
const Admin = mongoose.model("Admin", adminSchema);
const Restaurant = mongoose.model("Restaurant", restroSchema);

module.exports = {
  User,
  Admin,
  Restaurant,
};
