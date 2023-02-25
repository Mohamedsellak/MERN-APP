const User = require('../models/userModel')

const getUsers = async (req,res)=>{
    const users = await User.find()
    users 
    ?res.status(200).json(users)
    :res.status(400).json("error")
}

const addUser = async (req,res)=>{
    const {username,email,password} = req.body

    if (!username || ! email || !password) {
    res.status(400).json({message:'all field required!!'})
    }
    // const user = await User.create({
    //     username,
    //     email,
    //     password
    // })
    // or
    const user = await new User(req.body)
    user.save()
    res.status(200).json(user)
}

const updateUser = async (req,res)=>{
    res.status(200).send("update users")
}

const deleteUser = async (req,res)=>{
    const user = await User.findById(req.params.id)
    user.remove()
    // or
    // User.findOneAndDelete({_id:req.params.id},(err,_)=> {
    //     if (err) {
    //         res.status(400).json({message:'error!!'})
    //     }
    // })
    res.status(200).send(`delete users ${req.params.id}`)
}

module.exports = {
    getUsers,
    addUser,
    updateUser,
    deleteUser
}