const express = require('express');
const router = express.Router();

// Existing routes
router.get('/fast', (req, res) => {
  setTimeout(() => res.json({ message: 'Fast API response' }), 100);
});

router.get('/slow', (req, res) => {
  setTimeout(() => res.json({ message: 'Slow API response' }), 2000);
});

router.get('/graphql', (req, res) => {
  setTimeout(() => res.json({ data: { message: 'GraphQL API response' } }), 500);
});

module.exports = router;  // Make sure this line is present