const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('./database');
const authRoutes = require('./routes/auth');
const interactionRoutes = require('./routes/interaction');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api/auth', authRoutes);
app.use('/api/interactions', interactionRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
