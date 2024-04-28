// routes/users.js
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

// Protected route
router.get('/profile', auth, (req, res) => {
    res.send(req.user);
});

module.exports = router;
