const mongoose = require("mongoose");
const Voucher = mongoose.model("Voucher");
const User = mongoose.model("User");
const Booking = mongoose.model("Userbooking");
const nodemailer = require("nodemailer");

// admin accepts booking
const acceptBooking = async (req,res) =>{  
    sendacceptEmail(req,res)
    return res.status(200).send({
        message:"Successully accept"
    }
    )           
}

// admin rejects booking
const rejectBooking = async (req,res) =>{
    sendrejectEmail(req,res)
    return res.status(200).send({
        message:"Successfully reject"
    }
    )           
}

// send email of accepting operation
const sendacceptEmail = async (req,res) => {
    
    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
          user: 'elda64@ethereal.email',
          pass: '5m17Zjd99M5gNZ45E4'
      }
    })

    const userInstance = await User.findOne({email: req.body.user_email}).lean()
    const u_fn = userInstance.first_name
    const u_ln = userInstance.last_name
    const u_email = userInstance.email
    const u_ph = userInstance.phone_number
    const u_pk = req.body.pickup_date
    const u_st = req.body.service_type
    const u_om = req.body.option_message

    // Message object
    let message = {
      // Comma separated list of recipients
      to: req.body.user_email,

      // Subject of the message
      subject: 'Booking Accepted',

      // plaintext body
      text: 'Booking has been accepted',

      // HTML body
      html: "<p>The voucher booking with the information below has been accepted: </br>" +
              "Name: " + u_fn + " " + u_ln + "</br>" +
              "Phone number: " + u_ph + "</br>" +
              "Email address: " + u_email + "</br>" +
              "Service Type: " + u_st + "</br>" +
              "Pick-up Date: " + u_pk + "</br>" +
              "Message: " + u_om + 
            "</p>"

      };

    transporter.sendMail(message, (error, info) => {
      if (error) {
          console.log('Error occurred');
          console.log(error.message);
          return process.exit(1);
      }
      console.log(nodemailer.getTestMessageUrl(info));
  
});
}

// send email of rejecting operation
const sendrejectEmail = async (req,res) => {
    
    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
          user: 'elda64@ethereal.email',
          pass: '5m17Zjd99M5gNZ45E4'
      }
    })

    const userInstance = await User.findOne({email: req.body.user_email}).lean()
    const u_fn = userInstance.first_name
    const u_ln = userInstance.last_name
    const u_email = userInstance.email
    const u_ph = userInstance.phone_number
    const u_pk = req.body.pickup_date
    const u_st = req.body.service_type
    const u_om = req.body.option_message

    // Message object
    let message = {
      // Comma separated list of recipients
      to: req.body.user_email,

      // Subject of the message
      subject: 'Booking Rejected',

      // plaintext body
      text: 'Booking rejected',

      // HTML body
      html: "<p>The voucher booking with the information below has been rejected: </br>" +
              "Name: " + u_fn + " " + u_ln + "</br>" +
              "Phone number: " + u_ph + "</br>" +
              "Email address: " + u_email + "</br>" +
              "Service Type: " + u_st + "</br>" +
              "Pick-up Date: " + u_pk + "</br>" +
              "Message: " + u_om +
            "</p>"

      };

    transporter.sendMail(message, (error, info) => {
      if (error) {
          console.log('Error occurred');
          console.log(error.message);
          return process.exit(1);
      }
      console.log(nodemailer.getTestMessageUrl(info));
  
});
}

const makeBooking = async (req,res) =>{
    var date = new Date()
    const newbooking = new Booking({
        user_email : req.body.user_email,
        phone_number:req.body.phone_number,
        service_type: req.body.service_type,
        method: req.body.method,
        pickup_date: req.body.pickup_date,
        date: date.toLocaleString().toString(),
        option_message:req.body.option_message,
    })       
    newbooking.save()
    sendEmail(req,res)
    await User.updateOne({email:req.body.user_email},{$inc:{point:-100}})
    const userupdated = await User.findOne({email:req.body.user_email}).lean()
    return res.status(200).send({
        message:"Success",
        point: userupdated.point
    }
    )           
}


const cancelBooking = async (req,res) => {
  console.log(req.body.service_type)
  console.log(req.body.method)
  await Booking.deleteOne({service_type:req.body.service_type, 
                      method:req.body.method,
                      pickup_date:req.body.pickup_date,
                      option_message:req.body.option_message})
    
    sendCancelEmail(req,res)
    return res.status(200).send({
    message:"Success"
  }) 
}

const getSingleUserBookings = async (req,res) =>{
    const allbookings = await Booking.find({user_email: req.body.email}).lean()
    res.json(allbookings)
}

const getBookings = async (req,res) =>{
    const allbookings = await Booking.find({user_email: req.params.email}).lean()
    res.json(allbookings)
}

// for admin user 
const adminView = async (req,res) =>{
    const allbookings = await Booking.find().lean()
    res.send(allbookings)
}

const sendEmail = async (req,res) => {
    
    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
          user: 'elda64@ethereal.email',
          pass: '5m17Zjd99M5gNZ45E4'
      }
    })

    const userInstance = await User.findOne({email: req.body.user_email}).lean()
    const u_fn = userInstance.first_name
    const u_ln = userInstance.last_name
    const u_email = userInstance.email
    const u_ph = userInstance.phone_number
    const u_pk = req.body.pickup_date
    const u_st = req.body.service_type
    const u_date = new Date()
    const msg = req.body.optional_message



    // Message object
    let message = {
      // Comma separated list of recipients
      to: 'Admin <admin@test.com>',

      // Subject of the message
      subject: 'Voucher booking made',

      // plaintext body
      text: 'Booking made',

      // HTML body
      html: "<p>A new voucher booking has been made: </br>" +
              "Name: " + u_fn + " " + u_ln + "</br>" +
              "Phone number: " + u_ph + "</br>" +
              "Email address: " + u_email + "</br>" +
              "Service Type: " + u_st + "</br>" +
              "Pick-up Date: " + u_pk + "</br>" +
              "Date: " + u_date + "</br>"+ 
              "Message: " + msg + "</br>"+
            "</p>"

      };

    transporter.sendMail(message, (error, info) => {
      if (error) {
          console.log('Error occurred');
          console.log(error.message);
          return process.exit(1);
      }
      console.log(nodemailer.getTestMessageUrl(info));
  
});
}

const sendCancelEmail = async (req,res) => {
    
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'elda64@ethereal.email',
        pass: '5m17Zjd99M5gNZ45E4'
    }
  })

  const userInstance = await User.findOne({email: req.body.user_email}).lean()
  const u_fn = userInstance.first_name
  const u_ln = userInstance.last_name
  const u_email = userInstance.email
  const u_ph = userInstance.phone_number
  const u_md = req.body.method
  const u_pk = req.body.pickup_date
  const u_st = req.body.service_type
  const u_msg = req.body.option_message
  const u_date = new Date()



  // Message object
  let message = {
    // Comma separated list of recipients
    to: 'Admin <admin@test.com>',

    // Subject of the message
    subject: 'Booking cancelled',

    // plaintext body
    text: 'Test email from voucher service',

    // HTML body
    html: "<p>The user has cancelled a booking: </br>" +
            "Name: " + u_fn + " " + u_ln + "</br>" +
            "Phone number: " + u_ph + "</br>" +
            "Email address: " + u_email + "</br>" +
            "Service Type: " + u_st + "</br>" +
            "Method: " + u_md + "</br>" +
            "Pick-up Date: " + u_pk + "</br>" +
            "Date: " + u_date + "</br>" +
            "Message: " + u_msg +
          "</p>"

    };

  transporter.sendMail(message, (error, info) => {
    if (error) {
        console.log('Error occurred');
        console.log(error.message);
        return process.exit(1);
    }
    console.log(nodemailer.getTestMessageUrl(info));

});
}





module.exports = {makeBooking,cancelBooking ,getSingleUserBookings,getBookings, adminView, rejectBooking, acceptBooking}