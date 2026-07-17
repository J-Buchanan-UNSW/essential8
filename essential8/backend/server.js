const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse incoming JSON payloads
app.use(express.json());

// Basic API healthcheck route
app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'UP', message: 'Backend server is running smoothly' });
});

// Start listening for requests
app.listen(PORT, () => {
    console.log(`Server successfully started on http://localhost:${PORT}`);
});