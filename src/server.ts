import 'reflect-metadata'
import express = require('express');
import  createConnection  from './database';
import { router } from './routes/router';

createConnection();
const app = express();

app.listen(3000, () => console.log('Server is running'));

app.use(express.json());
app.use(router);