// backend/server.js

const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const port = 3001; // Choose a port for your backend
const cors = require('cors');

// Enable CORS for your frontend
app.use(cors());

// Define your authentication logic, routes, and middleware here

app.listen(port, () => {
  console.log(`Backend server is running on port ${port}`);
});
