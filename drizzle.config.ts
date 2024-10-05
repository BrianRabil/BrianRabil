import { defineConfig } from "drizzle-kit";

export default defineConfig({
	schema: "./db/schema.ts",
	dialect: "sqlite",
	dbCredentials: {
		url: "./sqlite.db",
	},
	out: "./drizzle",
	verbose: true,
});
