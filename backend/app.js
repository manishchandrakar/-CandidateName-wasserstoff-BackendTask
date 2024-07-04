const express = require('express');
const cors = require('cors');
const config = require('./src/config/config.js');
const loggingMiddleware = require('./src/middlewares/logging.js');
const errorHandler = require('./src/middlewares/errorHandler.js');
const apiRoutes = require('./src/routes/api.js');

const queueRoutes = require('./src/routes/queueRoutes.js');

const loadBalancerRoutes = require('./src/routes/loadBalancer.js');
// const queueRoutes = require('./routes/queueRoutes.js');

const app = express();

app.use(cors());
app.use(express.json());
app.use(loggingMiddleware);

app.use('/api', apiRoutes);
app.use('/loadbalancer', loadBalancerRoutes);
app.use('/queue', queueRoutes);

app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});

module.exports = app;