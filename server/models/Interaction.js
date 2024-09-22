const mongoose = require('mongoose');

const interactionSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    action: String,
    timestamp: { type: Date, default: Date.now },
    sessionId: String,
    page: String,
});

module.exports = mongoose.model('Interaction', interactionSchema);
