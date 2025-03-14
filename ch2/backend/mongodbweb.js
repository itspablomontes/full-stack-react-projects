import { createServer } from "node:http";
import { MongoClient } from "mongodb";

const URL = "mongodb://localhost:27017/";
const dbName = "ch2";
const client = new MongoClient(URL);

try {
	await client.connect();
	console.log("Successfully connected to the database!");
} catch (err) {
	console.error("Error Connecting to the database:", err);
}

const server = createServer(async (req, res) => {
	const db = client.db(dbName);
	const users = db.collection("users");
	const usersList = await users.find().toArray();
	res.statusCode = 200;
	res.setHeader("content-type", "application/json");
	res.end(JSON.stringify(usersList));
});

const host = "localhost";
const port = 3000;
server.listen(port, host, () => {
	console.log(`Server listening on http://${host}:${port}`);
});
