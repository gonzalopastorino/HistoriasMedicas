import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { getTasks,getTask, createTask,updateTask,deleteTask} from "../controllers/tasks.controller.js";
import { validateSchema } from '../middlewares/validator.middleware.js';
import {createTaskSchema} from '../schemas/task.schema.js'
import autorizacion from '../middlewares/autorizacion.js'

const router = Router()

router.get('/tasks', authRequired, getTasks)
router.get('/tasks/:id', authRequired, getTask)
router.post('/tasks', authRequired,autorizacion(['admin']),validateSchema(createTaskSchema), createTask)
router.delete('/tasks/:id', authRequired, autorizacion(['admin']), deleteTask)
router.put('/tasks/:id', authRequired, autorizacion(['admin']), updateTask)

export default router;