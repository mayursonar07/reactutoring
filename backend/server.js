const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const AWS = require('aws-sdk');

const app = express();

// Enable CORS for all routes
app.use(cors());
app.use(express.json());

// Initialize AWS SDK with the region
AWS.config.update({ region: 'ap-southeast-1' }); // Replace 'your-region' with your AWS region

// Create a Secrets Manager client
const secretsManager = new AWS.SecretsManager();

// Define a function to retrieve the SMTP credentials from Secrets Manager
const getSmtpCredentials = () => {
  return new Promise((resolve, reject) => {
    const secretName = 'gmail-smtp-settings'; // Replace with the name of your secret

    secretsManager.getSecretValue({ SecretId: secretName }, (err, data) => {
      if (err) {
        reject(err);
      } else {
        const secret = JSON.parse(data.SecretString);
        const smtpUsername = secret.username;
        const smtpPassword = secret.password;
        resolve({ smtpUsername, smtpPassword });
      }
    });
  });
};

app.post('/send-email', async (req, res) => {
  const { fname, lname, email, topics, contact } = req.body;

  try {
    // Retrieve SMTP credentials from AWS Secrets Manager
    const { smtpUsername, smtpPassword } = await getSmtpCredentials();

    // Create a transporter using the retrieved SMTP credentials
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: smtpUsername,
        pass: smtpPassword,
      },
    });

    // Compose the email
    const mailOptions = {
      from: smtpUsername,
      to: 'mayurprojects07@gmail.com',
      subject: 'New Enquiry',
      text: `Name: ${fname + ' ' + lname}\nEmail: ${email}\nMessage: ${topics}\nContact: ${contact}`,
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to send email' });
      } else {
        console.log('Email sent: ' + info.response);
        res.json({ message: 'Email sent successfully' });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve SMTP credentials' });
  }
});

const PORT = 3000; // Choose a port for your backend server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

