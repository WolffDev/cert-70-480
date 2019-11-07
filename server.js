const express = require('express');

const app = express();
const port = 8080;
const host = 'localhost';
const protocol = 'http';

app.use(express.static(`${__dirname}/public`));

app.get('/', (req, res) => {
  res.send('YAY!');
});

app.get('/submitHello', (req, res) => {
  const { userName } = req.query;
  res.send(`Hello ${userName}`);
});

app.listen(port, () => {
  console.log(`Listing on ${protocol}://${host}:${port}`);
});
