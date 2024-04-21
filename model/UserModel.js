const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    required: true,
    min: 0, // Optional: Enforce minimum age
  },
  mobileNumber: {
    type: String,
    required: true,
    unique: true, // Optional: Enforce unique mobile number
  },
  email: {
    type: String,
    required: true,
    unique: true, // Optional: Enforce unique email address
  },
  password: {
    type: String,
    required: true,
    minlength: 6, // Optional: Enforce minimum password length
  },
});

const UserModel = mongoose.model("users", userSchema);

module.exports = UserModel;
