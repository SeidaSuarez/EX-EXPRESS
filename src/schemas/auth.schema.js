import { z } from "zod";

export const registerSchema = z.object({
  username: z.string({
    required_error: "Nombre de usuario requerido",
  }),
  email: z
    .string({
      required_error: "Email requerido",
    })
    .email({
      message: "Email no valido",
    }),
  password: z
    .string({
      required_error: "Password requerida",
    })
    .min(6, {
      message: "La contraseña debe contener al menos 6 caracteres",
    }),
});

export const loginSchema = z.object({
  email: z
    .string({
      required_error: "Email requerido",
    })
    .email({
      message: "Email no valido",
    }),
  password: z
    .string({
      required_error: "Password requerida",
    })
    .min(6, {
      message: "La contraseña debe contener al menos 6 caracteres",
    }),
});

