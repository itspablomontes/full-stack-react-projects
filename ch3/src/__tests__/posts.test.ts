import mongoose from "mongoose";
import { describe, expect, test } from "@jest/globals";
import { createPost } from "../services/posts";
import { Post } from "../data/models/post";

describe("creating posts", () => {
  test("with all the parameters should suceed", async () => {
    const post = {
      title: "Hello Mongoose!",
      author: "Daniel Bugl",
      contents: "This post is stored in a MongoDB database using mongoose.",
      tags: ["mongoose", "mongodb"],
    };
    const createdPost = await createPost(post);
    expect(createdPost._id).toBeInstanceOf(mongoose.Types.ObjectId);
    const foundPost = await Post.findById(createdPost._id);
    expect(foundPost).toEqual(expect.objectContaining(post));
    expect(foundPost?.createdAt).toBeInstanceOf(Date);
    expect(foundPost?.updatedAt).toBeInstanceOf(Date);
  });
  test("creating posts whithout title, should fail", async () => {
    const post = {
      author: "Daniel Bugl",
      contents: "Post with no title",
      tags: ["empty"],
    };
    try {
      await createPost(post);
    } catch (err) {
      expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
      expect(err.message).toContain("`title` is required");
    }
    test("with minimal parameters should not succeed", async () => {
      const post = {
        title: "Only a little",
      };
      const createdPost = await createPost(post);
      expect(createdPost._id).toBeInstanceOf(mongoose.Types.ObjectId);
    });
  });
});
