import {date, z} from 'zod'


export const createTaskSchema= z.object({
    title: z.string({
        required_error: 'El titulo es requerido'
    }),
    description: z.string({
        required_error: 'La descripcion es requerida'
    }),
    date: z.string().datetime().optional(),
});