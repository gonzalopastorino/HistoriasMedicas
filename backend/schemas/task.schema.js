import {date, z} from 'zod'


export const createTaskSchema = z.object({
    dni: z.union([z.string(), z.number()]), 
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
    obrasocial: z.string({
        required_error: "La obra social es requerida",
    }),

    localidad: z.string({
        required_error: "La localidad es requerida",
    }),

    direccion: z.string({
        required_error: "La direccion es requerida",
    }),
    date: z.string().datetime().optional(),
});
