import {date, z} from 'zod'


export const createTaskSchema = z.object({
    nombre: z.string({
        required_error: "El nombre es requerido",
    }),
    apellido: z.string({
        required_error: "El apellido es requerido",
    }),
    edad: z.union([z.string(), z.number()]), // Acepta tanto números como cadenas
    diagnostico: z.string({
        required_error: "El diagnóstico es requerido",
    }),
    date: z.string().datetime().optional(),
});
