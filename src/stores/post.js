import { defineStore } from "pinia";
import axios from "axios";

export const usePostStore = defineStore("post", {
  state: () => ({
    posts: [],
    post: null,
    comments: [],
    user: null,
    newComment: {
      body: "",
      email: "",
    },
    nextCommentId: 501,
  }),
  actions: {
    async fetchPosts() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        this.posts = response.data;
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    },
    async fetchPostDetails(postId) {
      try {
        const postResponse = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${postId}`
        );
        this.post = postResponse.data;

        const commentsResponse = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
        );
        this.comments = commentsResponse.data;

        const userResponse = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${this.post.userId}`
        );
        this.user = userResponse.data;
      } catch (error) {
        console.error("Error fetching post details:", error);
      }
    },
    async submitComment(postId, userEmail) {
      if (userEmail && this.newComment.body) {
        try {
          const response = await axios.post(
            `https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
            {
              body: this.newComment.body,
              email: userEmail,
            }
          );

          const newComment = {
            ...response.data,
            id: this.nextCommentId++,
            email: userEmail,
          };
          this.comments.push(newComment);

          this.newComment.body = "";
        } catch (error) {
          console.error("Error submitting comment:", error);
        }
      }
    },
  },
});
