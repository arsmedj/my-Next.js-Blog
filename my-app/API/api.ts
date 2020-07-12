import axios from "axios";
import {
  GetPostsResponceType,
  PutNewPostType,
  GetCurrentPostType,
} from "../store/types/types";
const instance = axios.create({
  withCredentials: true,
  baseURL: "https://simple-blog-api.crew.red/",
});

export const postsApi = {
  getPosts() {
    return instance
      .get("posts")
      .then((responce: GetPostsResponceType) => responce.data);
  },
  putNewPost(title: string, body: string) {
    return instance
      .post("posts", { title, body })
      .then((responce: PutNewPostType) => responce.data);
  },
  deletePost(postId: number) {
    return instance.delete(`posts/${postId}`);
  },
  getCurrentPost(postId: number) {
    return instance
      .get(`posts/${postId}`)
      .then((responce: GetCurrentPostType) => responce.data);
  },
};
