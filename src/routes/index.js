import express from 'express';
const router = express.Router();

import EventRouter from './events/routes.js';

router.use('/', EventRouter);

export default router;
