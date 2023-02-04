require('dotenv').config();

const express = require('express');
const app = express();

const port = process.env.PORT || 4000;

app.use(express.json())

const cors = require('cors')

app.use(cors({
    origin: "http://localhost:3000"
}))

const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://Mohamedsellak:Mohamedsellak@cluster.ku4rqnz.mongodb.net/mydb?retryWrites=true&w=majority")
const Usermodel = require('./model/Users')


app.get('/', (req, res) => {
    res.send("hello")
})

app.get('/getUsers', (req, res) => {
    Usermodel.find({}, (error, result) => {
        if (error) {
            res.json(error)
        } else {
            res.json(result)
        }
    })
})

app.post('/createUsers', async (req, res) => {
    const user = new UserModal(req.body)
    await user.save()
    res.json(user)
})


app.listen(port, () => console.log(`server is running on port ${port}`));

//https://stackabuse.com/building-a-rest-api-with-node-and-express/
// https://www.freecodecamp.org/news/build-a-restful-api-using-node-express-and-mongodb/