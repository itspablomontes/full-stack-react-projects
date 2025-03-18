import { Post } from "../data/models/post";
import type { PostType } from "../types/Types";

export async function createPost({ title, author, contents, tags }: PostType) {
	const post = new Post({ title, author, contents, tags });
	return await post.save();
}
