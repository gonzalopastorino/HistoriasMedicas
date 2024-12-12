import {z} from 'zod'

export const registerSchema =z.object({
    username: z.string({
        required_error: 'El nombre de usuario es requerido'
    }).min(6,{
        message: 'El nombre de usuario require 6 caracteres minimo'
    }),
    email: z.string({
        required_error: 'El email es requerido',
    }).email({
        required_error: 'El email es invalido',
    }),
    password: z.string({
        required_error: 'La contraseña es requerida'
    }).min(6,{
        message: 'la contraseña require 6 caracteres minimo'
    }),
})

export const loginSchema= z.object({
    email: z.string({
        required_error: 'El email es requerido',
    }).email({
        required_error: 'El email es invalido'
    }),
    password: z.string({
        required_error: 'La contraseña es requerida'
    }).min(6,{
        message: 'la contraseña require 6 caracteres minimo'
    }),
})