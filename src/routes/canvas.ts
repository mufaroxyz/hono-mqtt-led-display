import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { UpdateCanvas, UpdateText } from "@/types/canvas";
import { publishPixel, publishText } from "@/lib/mqtt";

export default new Hono()
	.post("/api/update", zValidator("json", UpdateCanvas), async (c) => {
		await publishPixel(c.req.valid("json"));

		return c.json({ success: true });
	})
	.post("/api/text", zValidator("json", UpdateText), async (c) => {
		await publishText(c.req.valid("json"));

		return c.json({ success: true });
	});
