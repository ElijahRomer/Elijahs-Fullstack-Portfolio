require(`dotenv`).config();
const path = require('path');

const express = require('express');
const cors = require('cors');

const sendMail = require('./utils/sendMail')

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.static(path.resolve(__dirname, '../client/build')))
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors({
  origin: ["http://localhost:3000"]
}))

app.post('/', (req, res) => {
  console.log(`POST RECEIVED`)
  console.log(req.body)

  let name = req.body.name;
  let email = req.body.email;
  let message = req.body.message;

  console.log(`NAME: `, name)
  console.log(`EMAIL: `, email)
  console.log(`MESSAGE: `, message)

  sendMail(name, email, message)
    .then(result => {
      console.log(`Email sent...`, result)
      res.json({ msg: 'email sent successfully.' })
    })
    .catch(err => {
      console.log(`Email NOT sent...`, err.message)
      res.status(500).json({ msg: 'an error occured.' })
    })
})

app.get('*', (req, res) => {
  console.log(`REQUEST RECEIVED`);

  const buildFilePath = path.join(__dirname, '../client/build/index.html');
  console.log(buildFilePath);

  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}!`);
})