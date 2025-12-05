const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const customerRoutes = require('./routes/customerRoutes');

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
// Enable CORS for development (allow requests from frontend served on another origin)
// in app.js
const cors = require('cors');
app.use(cors({ origin: 'http://localhost:5500' }));


// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/coffee_shop')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB:', err));

// Routes
app.use('/api/customers', customerRoutes);
app.get("/", (req, res) => {
  res.send("API root working");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});



/*
GET all → /api/customers

GET one → /api/customers/:id

POST → /api/customers

PUT → /api/customers/:id

DELETE → /api/customers/:id
*/