const express = require('express');
const router = express.Router();
const loadBalancerService = require('../services/loadBalancer.js');

router.get('/', (req, res) => {
  loadBalancerService.route(req, res);
});

module.exports = router;