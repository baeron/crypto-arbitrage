const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const rates = require('./routes/rates');

// Port Number
const port = 5000;

// CORS Middleware
app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());
app.use('/rate', rates);

app.get('/', (req, res) => {
    res.send('Hello worlds');
});
  
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});
  
// Start Server
app.listen(port, () => {
    console.log('Server started on port '+port);
});