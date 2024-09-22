const express = require('express');
const cors = require('cors');
const mongoose = require('./database'); // Assuming you have a database connection file
const authRoutes = require('./routes/auth');
const interactionRoutes = require('./routes/interaction');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// CORS configuration
app.use(cors({
    origin: 'http://localhost:3001', // Allow requests from your frontend
}));

app.use(express.json()); // Middleware to parse JSON bodies

// Define your routes
app.use('/api/auth', authRoutes);
app.use('/api/interactions', interactionRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
