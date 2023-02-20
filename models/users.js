const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  Fullname: {
    type: String,
    require: true,
  },
  Lastname: {
    type: String,
    require: true,
  },
  Email: {
    type: String,
    require: true
  },
  Password: {
    type: String,
    require: true,
  },
  CreateDate: {
    type: Date,
    default: Date.now
  },
  // book: [{ type: mongoose.Types.ObjectId, ref: "Book", require: true }]
});

module.exports = mongoose.model("user", UserSchema);