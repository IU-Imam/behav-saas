const express = require('express');
const router = express.Router();
const { logInteraction, getAnalytics } = require('../controllers/interactionController');
const { authenticateToken } = require('../middleware/auth');

router.post('/log_interaction', authenticateToken, logInteraction);
router.get('/analytics', authenticateToken, getAnalytics);

module.exports = router;
