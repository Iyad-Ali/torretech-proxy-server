const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const app = express();

app.use(cors());

app.get('/', function(req, res){
  res.send('<h1>Welcome from TorreTech proxy server!</h1>');
});
app.get('/user/:username', async (req, res) => {
  const { username } = req.params;
  const response = await fetch(`https://torre.bio/api/bios/${username}`);
  const data = await response.json();
  res.json(data);
});

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log('Server listening on port 3000');
});