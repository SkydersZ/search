const express = require('express')
const app = express()
const port = 3000
//const https = require('https');
//const fs = require('fs');

//GET home route
app.get('/', (req, res) => {
      res.send('Hello World!');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// we will pass our 'app' to 'https' server
//https.createServer(app).listen(3000);
//