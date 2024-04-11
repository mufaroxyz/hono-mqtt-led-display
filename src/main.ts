import { serve } from "@hono/node-server";
import router from "./router";

const port = Number(process.env.PORT ?? "8080");

serve({
	port,
	fetch: router.fetch,
}).on("listening", () => {
	console.info(`Server is listening on port ${port}`);
	console.info(`http://localhost:${port}`);
});
