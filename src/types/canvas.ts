import { z } from "zod";

export const UpdateCanvas = z.object({
	x: z.number(),
	y: z.number(),
	color: z.object({
		r: z.number(),
		g: z.number(),
		b: z.number(),
	}),
});

export type UpdateCanvas = z.infer<typeof UpdateCanvas>;

export const UpdateText = z.object({
	text: z.string(),
});

export type UpdateText = z.infer<typeof UpdateText>;
