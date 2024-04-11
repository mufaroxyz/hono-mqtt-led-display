import { Hono } from "hono";
import { serveStatic } from "@hono/node-server/serve-static";
import canvas from "./routes/canvas";

export default new Hono()
	.use(
		serveStatic({
			root: "public",
		}),
	)
	.route("/canvas", canvas);
