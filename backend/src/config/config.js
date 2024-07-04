module.exports = {
  port: process.env.PORT || 3001,
  apiEndpoints: [
    { url: '/api/fast', type: 'REST', weight: 0.5 },
    { url: '/api/slow', type: 'REST', weight: 0.3 },
    { url: '/api/graphql', type: 'GraphQL', weight: 0.2 },
  ],
  queueConcurrency: 1,
};