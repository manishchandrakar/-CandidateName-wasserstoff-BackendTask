const request = require('supertest');
const app = require('../src/app.js');

describe('Load Balancer', () => {
  it('should route requests', async () => {
    const response = await request(app).get('/loadbalancer');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('message');
  });

  // Add more test cases as needed
});