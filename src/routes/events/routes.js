import express from 'express';
const EventRouter = express.Router();
import { getEvents,getEventByCategory } from '../../controllers/events/getEvents';

EventRouter.get('/event/category',getEventByCategory)
EventRouter.get('/events', getEvents);

export default EventRouter;
