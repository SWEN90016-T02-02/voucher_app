const express = require('express')
const app = express()

const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require("./models/user")
const port = 4000

// a safer way to connect to database
const dotenv = require('dotenv')
const signupUrls = require('./routes/normalRouter')
const loginUrls = require('./routes/loginRouter')
const cors = require('cors')

dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS , () => console.log("Database connected"))

const db = mongoose.connection

db.on('error', err =>{
    console.error(err)
    process.exit(1)
})
db.once('open',async ()=>{
    console.log("Mongo connection started on " + db.host + ":" + db.port)
})


app.use(express.json())
app.use(cors())
// base path
app.use('/app', signupUrls)
app.use('/app',loginUrls)


app.listen(port, () => {
    console.log(`The app is listening at http://localhost:${port}`)
  });