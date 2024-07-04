const Queue = require('better-queue');
const config = require('../config/config.js');

class QueueManager {
  constructor() {
    this.fifoQueue = new Queue(this.processTask, { concurrent: config.queueConcurrency });
    this.priorityQueue = new Queue(this.processTask, { 
      concurrent: config.queueConcurrency,
      priority: (task, cb) => cb(null, task.priority)
    });
  }

  processTask(task, cb) {
    console.log(`Processing task: ${task.id}`);
    setTimeout(() => {
      cb(null, { result: `Task ${task.id} completed` });
    }, 1000);
  }

  addToFIFOQueue(task) {
    return new Promise((resolve, reject) => {
      this.fifoQueue.push(task, (err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });
  }

  addToPriorityQueue(task, priority) {
    return new Promise((resolve, reject) => {
      this.priorityQueue.push({ ...task, priority }, (err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });
  }
}

module.exports = new QueueManager();