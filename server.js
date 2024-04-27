// Import required modules
const express = require('express');

// Create an instance of Express
const app = express();

// Define a route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'kp.nashid.nashid@gmail.com',
    pass: 'qmdfdgmrhnzftoxp'
  }
});

var mailOptions = {
  from: 'kp.nashid.nashid@gmail.com',
  to: 'ashin209@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'Test email using Node.js!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
