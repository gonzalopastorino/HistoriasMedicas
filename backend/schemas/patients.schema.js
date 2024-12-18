import {date, z} from 'zod'


export const createTaskSchema= z.object({
    nombre: z.string({
        required_error: 'El titulo es requerido'
    }),
    apellido: z.string({
        required_error: 'La descripcion es requerida'
    }),
    edad: z.number({
        required_error: 'La descripcion es requerida'
    }),
    diagnostico: z.string({
        
    }),
    date: z.string().datetime().optional(),
});