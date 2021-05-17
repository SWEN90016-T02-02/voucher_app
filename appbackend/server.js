const express = require('express')
const app = express()

const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require("./models/user")
require("./models/userbooking")
require("./models/voucher")

const port = 4000

// a safer way to connect to database
const dotenv = require('dotenv')
const routesUrls = require('./routes/normalRouter')
const cors = require('cors')

const voucherRouter = require('./routes/voucherRouter')
const bookingRouter = require('./routes/bookingRouter')


// --database connection and configure model--
dotenv.config()
mongoose.connect(process.env.DATABASE_ACCESS , 
    {useNewUrlParser:true,
        useUnifiedTopology:true,
        useCreateIndex :true,
        useCreateIndex:true,
        useFindAndModify : false,
        dbName : 'User'})

// dotenv.config()
// mongoose.connect(process.env.DATABASE_ACCESS , () => console.log("Database connected"))
const db = mongoose.connection

db.on('error', err =>{
    console.error(err)
    process.exit(1)
})
db.once('open',async ()=>{
    console.log("Mongo connection started on " + db.host + ":" + db.port)
})





// --middleware part--
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true })) // replaces body-parser

// base path
app.use('/app', routesUrls)

app.use('/voucher', voucherRouter)
app.use('/booking', bookingRouter)


app.listen(port, () => {
    console.log(`The app is listening at http://localhost:${port}`)
  });