const express = require('express');
const fs = require('fs');
const app = express();

let startTime;



app.get('/', (req, res) => {
	res.send(`GEt Reposne`);
  });

app.get('/readfile', (req, res) => {
	res.send(`Readed File`);
});
app.get('/flood', (req, res) => {
	const end = Date.now() + 20 * 1000; 
	while (Date.now() < end); 
	res.send('blocking done');
  });
  

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
