const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const app = express();

// Enable CORS for all routes
app.use(cors());
app.use(express.json());

app.post('/send-email', (req, res) => {
  const { fname,lname, email, topics, contact } = req.body;

  // Create a transporter using your email provider's SMTP settings
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'mayurprojects07@gmail.com',
      pass: 'bdkzyuheraxbkksj',
    },
  });

  // Compose the email
  const mailOptions = {
    from: 'mayurprojects07@gmail.com',
    to: 'mayurprojects07@gmail.com',
    subject: 'New Enquiry',
    text: `Name: ${fname+ " "+lname}\nEmail: ${email}\nMessage: ${topics}\nContact: ${contact}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).json({ error: 'Failed to send email' });
    } else {
      console.log('Email sent: ' + info.response);
      res.json({ message: 'Email sent successfully' });
    }
  });
});

const PORT = 3000; // Choose a port for your backend server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

