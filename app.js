const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
const nodemailer = require('nodemailer');
require('dotenv').config();

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (e.g., CSS, images)
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.render('index'));
app.get('/about', (req, res) => res.render('about'));
app.get('/places', (req, res) => res.render('places'));
app.get('/contact', (req, res) => res.render('contact'));



app.use(express.urlencoded({ extended: false }));
app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
      }
    });

    const mailOptions = {
      from: email,
      to: 'neha.contact295@gmail.com',
      subject: `New message from ${name}`,
      text: message
    };

    await transporter.sendMail(mailOptions);
    res.send('Message sent successfully!');
  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).send('Error sending email, please try again later.');
  }
});

app.listen(PORT, () => {
  console.log(`Nangal Tourism server running on http://localhost:${PORT}`);
});

