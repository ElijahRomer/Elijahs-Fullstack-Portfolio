require(`dotenv`).config();

const express = require('express');
const cors = require('cors');

const nodemailer = require(`nodemailer`);
const { google } = require(`googleapis`);

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

oAuth2Client.setCredentials({
  refresh_token: REFRESH_TOKEN
})

const sendMail = async (senderEmail, subject, body) => {
  try {
    const accessToken = await oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'elijaharomer@gmail.com',
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken
      }
    });

    const mailOptions = {
      from: 'ELIJAHAROMER <elijaharomer@gmail.com>',
      to: 'elijaharomer@gmail.com',
      subject: "Hello from gmail using API",
      text: 'Hello from gmail email using API',
      html: '<h1>Hello from gmail email using API</h1>'
    };

    const result = await transport.sendMail(mailOptions)

    return result;

  } catch (err) {
    return err;
  }
}

// console.log(`CLIENT_ID:`, CLIENT_ID)
// console.log(`CLIENT_SECRET:`, CLIENT_SECRET)
// console.log(`REDIRECT_URI:`, REDIRECT_URI)
// console.log(`REFRESH_TOKEN:`, REFRESH_TOKEN)

const PORT = process.env.PORT || 3001;

const app = express();

// app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors({
  origin: ["http://localhost:3000"]
}))

app.post('/', (req, res) => {
  console.log(`POST RECEIVED`)
  console.log(req.body)
  sendMail()
    .then(result => {
      console.log(`Email sent...`, result)
      res.json({ msg: 'email sent successfully.' })
    })
    .catch(err => {
      console.log(err.message)
      res.status(500).json({ msg: 'an error occured.' })
    })
})

app.get('*', (req, res) => {
  console.log(`REQUEST RECEIVED`);
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}!`);
})