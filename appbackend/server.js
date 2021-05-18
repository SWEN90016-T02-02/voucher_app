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
const signupUrls = require('./routes/normalRouter')
const loginUrls = require('./routes/loginRouter')
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
app.use('/app', signupUrls)
app.use('/app',loginUrls)


app.use('/voucher', voucherRouter)
app.use('/booking', bookingRouter)


app.listen(port, () => {
    console.log(`The app is listening at http://localhost:${port}`)
  });




// const Booking = mongoose.model("Userbooking");
// app.get('/addbooking',(req, res) =>{
//     const email = ["test1@test.com","test2@test.com","test3@test.com"]
//     const pn = ["0421111112", "0422222222", "0423333333"]
//     const st = ["flowers","vegmeal","bakerygoods", "chocolatebox", "cheeseplatter"]
//     const method = ["pick-up from the service","local delivery to the MYD offices"]

//     for (var i=0; i<=10; i++){
//         const ran1 = Math.floor(Math.random() * 3)
//         const ran2 = Math.floor(Math.random() * 6)
//         const ran3 = Math.floor(Math.random() * 2)
//         const newbooking = new Booking({
//             user_email : email[ran1],
//             phone_number: pn[ran1],
//             service_type: st[ran2],
//             method: method[ran3],
//             pickup_date: new Date(),
//             date: new Date().toLocaleDateString().toString()
//         })
//         newbooking.save()
//     }

// })