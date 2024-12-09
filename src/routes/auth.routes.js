import {Router} from 'express'
import { login,registrarse, logout, profile, verifyToken } from '../controllers/auth.controller.js';
import { authRequired } from '../middlewares/validateToken.js';
import { validateSchema } from '../middlewares/validator.middleware.js';
import {registerSchema,loginSchema} from '../schemas/auth.schema.js'
const router= Router();

router.post('/registrarse', validateSchema(registerSchema), registrarse)
router.post('/login', validateSchema(loginSchema), login)

router.post('/logout', logout)
router.get("verify", verifyToken);
router.get('/profile', authRequired, profile)


export default router;