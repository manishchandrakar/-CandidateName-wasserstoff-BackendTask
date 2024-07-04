import React from 'react';
import LoadBalancerDemo from './components/LoadBalancerDemo';
import QueueManager from './components/QueueManager';

function App() {
  return (
    <div className="App">
      <h1>Intelligent Load Balancer</h1>
      <LoadBalancerDemo />
      <QueueManager />
    </div>
  );
}

export default App;