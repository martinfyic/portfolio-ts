import { z } from 'zod';

export const validationSchema = z.object({
	name: z.string({
		required_error: 'El nombre es requerido.',
	}),
	email: z.string({ required_error: 'El email es requerido.' }).email(),
	message: z.string({
		required_error: 'El mensaje es requerido',
	}),
});
