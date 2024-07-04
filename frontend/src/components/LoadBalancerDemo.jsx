import React, { useState } from 'react';
import axios from 'axios';
import './LoadBalancerDemo.css'; // Make sure to import the CSS file

function LoadBalancerDemo() {
  const [response, setResponse] = useState('');

  const makeRequest = async () => {
    try {
      const result = await axios.get('http://localhost:3001/loadbalancer');
      setResponse(JSON.stringify(result.data, null, 2));
    } catch (error) {
      setResponse('Error occurred: ' + error.message);
      console.log(error, 'Error occurred');
    }
  };

  return (
    <div className="load-balancer-demo">
      <h2>Load Balancer Demo</h2>
      <button onClick={makeRequest}>Make Request</button>
      {response && <pre>{response}</pre>}
    </div>
  );
}

export default LoadBalancerDemo;