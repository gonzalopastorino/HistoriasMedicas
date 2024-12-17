import {date, z} from 'zod'


export const createTaskSchema= z.object({
    nombre: z.string({
        required_error: 'El nombre es requerido'
    }),
    apellido: z.string({
        required_error: 'El apellido es requerido'
    }),
    edad: z.number({
        required_error: 'La edad es requerida'
    }),
    diagnostico: z.string({
        required_error: 'El diagnostico es requerido'
    }),
    date: z.string().datetime().optional(),
});