declare namespace NodeJS {
	interface ProcessEnv {
		NODE_ENV: "development" | "production";
		PORT: string;
		MQTT_SERVER_URI: string;
	}
}
