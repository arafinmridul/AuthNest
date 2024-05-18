const mongoose = require("mongoose");

// defining a mongoose model
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        quote: { type: String },
    },
    { collection: "authnest_users" }
);

// User model
const User = mongoose.model("User", userSchema);

module.exports = User;
