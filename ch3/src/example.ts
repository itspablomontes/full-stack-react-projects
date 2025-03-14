import { initDatabase } from "./data/init";
import { Post } from "./data/models/post";

await initDatabase();

const post = new Post({
	title: "Hello Mongoose!",
	author: "Daniel Bugl",
	contents: "This post is stored in MongoDB database using mongoose",
	tags: ["mongoose", "mongodb"],
});

const createdPost = await post.save();
await Post.findByIdAndUpdate(createdPost._id, {
	$set: { title: "Hello again, mongoose!" },
});
const posts = await Post.find();
console.log(posts);
