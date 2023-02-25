require('dotenv').config()
const cors = require('cors')
const express = require('express')
const app = express()
const port = process.env.PORT || 5000

app.use(express.urlencoded({extended:false}));
app.use(express.json())
app.use(cors())


app.use('/users',require('./routes/userRoot'))


app.listen(port,()=> console.log('server is running'))

// https://dev.to/nyctonio/authentication-in-node-js-with-mongodb-bcrypt-and-jwt-web-tokens-with-cookies-hl3