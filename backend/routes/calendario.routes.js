import express from 'express';
import { createEvent, getUserEvents } from '../controllers/calendario.controller.js';
import { authRequired } from "../middlewares/validateToken.js";

const router = express.Router();

router.post('/calendario', authRequired, createEvent);
router.get('/calendario', authRequired, getUserEvents);

export default router;
