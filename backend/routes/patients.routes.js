import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { getPatients} from "../controllers/patients.controller.js";
import { validateSchema } from '../middlewares/validator.middleware.js';
import {createTaskSchema} from '../schemas/patients.schema.js'
const router = Router()

router.get('/list', authRequired, getPatients)


export default router;