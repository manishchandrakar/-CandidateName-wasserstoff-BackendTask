import React, { useState } from 'react';
import axios from 'axios';

function QueueManager() {
  const [taskId, setTaskId] = useState('');
  const [priority, setPriority] = useState(0);
  const [response, setResponse] = useState('');

  const addToFIFOQueue = async () => {
    try {
      const result = await axios.post('http://localhost:3001/queue/fifo', { id: taskId });
      setResponse(JSON.stringify(result.data, null, 2));
    } catch (error) {
      setResponse('Error occurred');
    }
  };

  const addToPriorityQueue = async () => {
    try {
      const result = await axios.post('http://localhost:3001/queue/priority', { id: taskId, priority });
      setResponse(JSON.stringify(result.data, null, 2));
    } catch (error) {
      setResponse('Error occurred');
    }
  };

  return (
    <div>
      <h2>Queue Manager</h2>
      <input 
        type="text" 
        value={taskId} 
        onChange={(e) => setTaskId(e.target.value)} 
        placeholder="Task ID" 
      />
      <input 
        type="number" 
        value={priority} 
        onChange={(e) => setPriority(Number(e.target.value))} 
        placeholder="Priority" 
      />
      <button onClick={addToFIFOQueue}>Add to FIFO Queue</button>
      <button onClick={addToPriorityQueue}>Add to Priority Queue</button>
      <pre>{response}</pre>
    </div>
  );
}

export default QueueManager;