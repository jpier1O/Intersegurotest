// src/app.ts
import express from 'express';
import seguroRoutes from './routes/seguroRoutes';

const app = express();

app.use(express.json());

app.use('/api', seguroRoutes);

export default app;
