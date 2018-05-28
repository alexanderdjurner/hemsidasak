const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');

// Create server.
const app = express();

// CORS.
app.use(cors());
app.options('*', cors());

// Body parser.
app.use(bodyParser.json());

// Serve static files.
app.use(express.static('public'));

// Start server.
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Running on port ${port}.`);
});
