import mqtt from "mqtt";
import type { UpdateCanvas, UpdateText } from "@/types/canvas";

const client = mqtt.connect(process.env.MQTT_SERVER_URI);

export function publishPixel(update: UpdateCanvas) {
	return client.publishAsync("pixel", JSON.stringify(update));
}

export function publishText(update: UpdateText) {
	return client.publishAsync("text", update.text);
}
