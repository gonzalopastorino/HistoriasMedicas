import express from 'express'
import morgan from 'morgan'
import authRoutes from './routes/auth.routes.js'
import cookieParser from 'cookie-parser';
import taskRoutes from './routes/tasks.routes.js'
import patientesRoutes from './routes/patients.routes.js'
import cors from 'cors'

const app= express();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))
app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser())
app.use('/auth',authRoutes);
app.use('/medico',taskRoutes);

app.use('/patients',patientesRoutes);
export default app;
