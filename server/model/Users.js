const mongoose = require('mongoose')

UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const UserModal = mongoose.model("users", UserSchema)
module.exports = UserModal