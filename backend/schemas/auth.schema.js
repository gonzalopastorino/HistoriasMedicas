import { z } from 'zod';

export const registerSchema = z.object({
  username: z
    .string({
      required_error: 'El nombre de usuario es requerido',
    })
    .min(6, {
      message: 'El nombre de usuario requiere al menos 6 caracteres',
    }),
  email: z
    .string({
      required_error: 'El email es requerido',
    })
    .email({
      message: 'El email es invalido', // Mensaje para el formato inválido
    }),
  password: z
    .string({
      required_error: 'La contraseña es requerida',
    })
    .min(6, {
      message: 'La contraseña requiere al menos 6 caracteres',
    }),
});

export const loginSchema = z.object({
  email: z
    .string({
      required_error: 'El email es requerido',
    })
    .email({
      message: 'El email es inválido', // Mensaje para el formato inválido
    }),
  password: z
    .string({
      required_error: 'La contraseña es requerida',
    })
    .min(6, {
      message: 'La contraseña requiere al menos 6 caracteres',
    }),
});
