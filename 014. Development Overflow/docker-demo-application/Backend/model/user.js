import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  phone: Number,
});

export const User = mongoose.model("User", userSchema);
    