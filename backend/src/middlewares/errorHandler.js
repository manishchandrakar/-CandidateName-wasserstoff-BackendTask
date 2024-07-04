const logger = require('../utils/logger.js');

module.exports = (err, req, res, next) => {
  logger.error(err.stack);
  res.status(500).send('Something broke!');
};