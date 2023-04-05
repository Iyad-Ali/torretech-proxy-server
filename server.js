const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const app = express();

app.use(cors());

app.get('/user/:username', async (req, res) => {
  const { username } = req.params;
  const response = await fetch(`https://torre.bio/api/bios/${username}`);
  const data = await response.json();
  res.json(data);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});