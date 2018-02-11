import express from 'express';
import redis from 'redis';

const app = express();
// in terminal redis-server
const client = redis.createClient(6379, '127.0.0.1');

client.on('error', err => console.log("Error " + err));

client.on('connect', () => console.log('Redis connected...'));

app.listen(3000, () => console.log('Server successfully started on http://localhost:3000'))
