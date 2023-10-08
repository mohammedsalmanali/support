// Backend server code (e.g., server.js)

const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Your user data and database connection logic
const users = [
  { id: 1, email: 'user@example.com', password: 'password123' },
  // Add more user data as needed
];

// Secret key for JWT token generation
const secretKey = 'your-secret-key';

// Authentication endpoint
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  // Find the user in your database by email
  const user = users.find((u) => u.email === email);

  if (!user || user.password !== password) {
    // Unauthorized: Invalid credentials
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // Generate a JWT token and send it in the response
  const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: '1h' });
  res.json({ token });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
