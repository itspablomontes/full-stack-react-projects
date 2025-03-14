import mongoose from "mongoose";

export function initDatabase() {
	const DB_URL = process.env.DATABASE_URL;
	if (DB_URL) {
		mongoose.connection.on("open", () => {
			console.info("succesfully connected to the database:", DB_URL);
		});
		const connection = mongoose.connect(DB_URL);
		return connection;
	}
}
