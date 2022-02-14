const express = require('express');

const cors = require('cors');

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
  // console.log(JSON.parse(req.body))
  res.json({ msg: 'post received' })
})

app.get('*', (req, res) => {
  console.log(`REQUEST RECEIVED`);
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}!`);
})