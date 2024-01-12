const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'theleafea23@gmail.com',
    pass: 'tTL23#@A',
  },
});

app.post('/api/send-email', async (req, res) => {
  const { to, subject, message } = req.body;

  const mailOptions = {
    from: 'theleafea23@gmail.com',
    to,
    subject,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error.message);
    res.status(500).send('Failed to send email');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
