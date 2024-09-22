const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');
const Stripe = require('stripe');

router.post('/register', register);
router.post('/login', login);

module.exports = router;


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Endpoint for creating a subscription
router.post('/create-checkout-session', authenticateToken, async (req, res) => {
    const { planId } = req.body; // Plan ID from Stripe Dashboard

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [{
            price: planId, // ID of the plan from Stripe
            quantity: 1,
        }],
        mode: 'subscription',
        success_url: `${process.env.CLIENT_URL}/success`,
        cancel_url: `${process.env.CLIENT_URL}/cancel`,
    });

    res.json({ url: session.url });
});
