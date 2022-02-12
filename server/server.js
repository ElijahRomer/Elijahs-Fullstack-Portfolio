const express = require('express');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post('/', (req, res) => {
  console.log(`POST RECEIVED`)
  console.log(req)
})

app.get('*', (req, res) => {
  console.log(`REQUEST RECEIVED`);
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}!`);
})