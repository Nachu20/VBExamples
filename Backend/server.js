// Install necessary packages
// npm install express cors body-parser

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Sample POST route to handle registration
app.post('/register', (req, res) => {
  const { username, email, password } = req.body;
  console.log(req.body)
  // Here you would typically save the data to a database.
  // For the sake of the example, let's assume it's successful.
  if (username && email && password) {
    return res.status(201).json({
      message: 'User registered successfully!',
      user: { username, email }
    });
  } else {
    return res.status(400).json({
      message: 'Please provide all required fields'
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
