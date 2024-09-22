const Interaction = require('../models/Interaction');

exports.logInteraction = async (req, res) => {
    const { action, page } = req.body;
    const newInteraction = new Interaction({ userId: req.user.userId, action, page });
    
    try {
        await newInteraction.save();
        res.sendStatus(200);
    } catch (error) {
        res.status(400).send('Error: ' + error.message);
    }
};

exports.getAnalytics = async (req, res) => {
    const userId = req.user.userId;
    try {
        const result = await Interaction.aggregate([
            { $match: { userId } },
            { $group: { _id: '$action', count: { $sum: 1 }, pages: { $addToSet: '$page' } } },
        ]);
        res.json(result);
    } catch (error) {
        res.status(500).send('Error: ' + error.message);
    }
};
