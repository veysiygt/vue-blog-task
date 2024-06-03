<template>
  <div class="container mx-auto p-4">
    <div v-if="postStore.post" class="bg-white p-6 rounded-lg shadow-md mb-6">
      <h1 class="text-4xl font-bold text-indigo-600 mb-4">
        {{ postStore.post.title }}
      </h1>
      <p class="text-gray-700 mb-6">{{ postStore.post.body }}</p>

      <AuthorInfo v-if="postStore.user" :user="postStore.user" />
      <UserComments :comments="postStore.comments" />

      <AddComment
        :loading="loading"
        @loading="loading = true"
        @loaded="loading = false"
      />
    </div>
    <div v-else class="text-center text-gray-700"><LoadingSpinner /></div>
  </div>
</template>

<script>
import LoadingSpinner from "@/components/LoadingSpinner.vue";
import AuthorInfo from "@/components/AuthorInfo.vue";
import UserComments from "@/components/UserComments.vue";
import AddComment from "@/components/AddComment.vue";

import { usePostStore } from "@/stores/post";
import { useAuthStore } from "@/stores/auth";

export default {
  name: "PostDetails",
  components: {
    LoadingSpinner,
    AuthorInfo,
    UserComments,
    AddComment,
  },
  data() {
    return {
      loading: false,
      postStore: usePostStore(),
      authStore: useAuthStore(),
    };
  },
  created() {
    const postId = this.$route.params.id;
    this.postStore.fetchPostDetails(postId);
    this.authStore.checkAuth();
  },
};
</script>
