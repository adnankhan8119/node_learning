// server.js
const express = require('express');
const fs = require('fs');
const app = express();



app.get('/readfile', (req, res) => {
    res.send(`Readed File`);
});


app.get('/flood', async(req, res) => {
    await new Promise(resolve => setTimeout(resolve, 5 * 1000));
    res.send('non-blocking done');
  });
  

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
