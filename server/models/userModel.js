const mongoose = require('mongoose');
mongoose.set('strictQuery',true)

mongoose.connect("mongodb+srv://Mohamedsellak:Mohamedsellak@cluster.ku4rqnz.mongodb.net/mydb?retryWrites=true&w=majority")

const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }

})

module.exports = mongoose.model('users',userSchema)