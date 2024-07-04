const config = require('../config/config.js');
const axios = require('axios');

class LoadBalancer {
  constructor() {
    this.apis = config.apiEndpoints;
  }

  async route(req, res) {
    const api = this.selectAPI();
    try {
      const response = await axios.get(`http://localhost:${config.port}${api.url}`);
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ error: 'Error routing request' });
    }
  }

  selectAPI() {
    // Simple random selection for now
    return this.apis[Math.floor(Math.random() * this.apis.length)];
  }
}

module.exports = new LoadBalancer();