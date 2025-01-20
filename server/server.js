require('dotenv').config();
const express = require('express');
const app = express();
const { readFile } = require('fs').promises;

app.get('/', async (req, res) => {
    res.send(await readFile('./home.html', 'utf8'));
});

app.listen(process.env.PORT, () => {
  console.log('Server is listening on port', process.env.PORT);
});
