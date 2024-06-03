<template>
    <div class="container mx-auto p-4">
      <div v-if="post" class="bg-white p-6 rounded-lg shadow-md mb-6">
        <h1 class="text-4xl font-bold text-indigo-600 mb-4">{{ post.title }}</h1>
        <p class="text-gray-700 mb-6">{{ post.body }}</p>
  
        <AuthorInfo v-if="user" :user="user" />
        <UserComments :comments="comments" />
  
        <div class="p-4 bg-white rounded-lg shadow-inner mt-6">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">Add a Comment</h2>
          <ValidationObserver v-slot="{ handleSubmit, reset }">
            <form @submit.prevent="handleSubmit(() => submitComment(reset))">
              <CommentInput v-model="postStore.newComment.body" />
              <div class="flex items-center justify-between">
                <CustomButton :disabled="loading" type="submit">
                  Submit
                </CustomButton>
              </div>
            </form>
          </ValidationObserver>
        </div>
      </div>
      <div v-else class="text-center text-gray-700"><LoadingSpinner /></div>
    </div>
  </template>
  
  <script>
  import LoadingSpinner from "@/components/LoadingSpinner.vue";
  import CustomButton from "@/components/CustomButton.vue";
  import AuthorInfo from "@/components/AuthorInfo.vue";
  import UserComments from "@/components/UserComments.vue";
  import CommentInput from "@/components/CommentInput.vue";
  import { usePostStore } from "@/stores/post";
  import { useAuthStore } from "@/stores/auth";
  import { ValidationObserver } from "vee-validate";
  
  export default {
    name: "PostDetails",
    components: {
      LoadingSpinner,
      CustomButton,
      AuthorInfo,
      UserComments,
      CommentInput,
      ValidationObserver,
    },
    setup() {
      const postStore = usePostStore();
      const authStore = useAuthStore();
  
      return {
        postStore,
        authStore,
        newComment: postStore.newComment,
        loading: false,
      };
    },
    computed: {
      post() {
        return this.postStore.post;
      },
      comments() {
        return this.postStore.comments;
      },
      user() {
        return this.postStore.user;
      },
    },
    created() {
      const postId = this.$route.params.id;
      this.postStore.fetchPostDetails(postId);
      this.authStore.checkAuth();
    },
    methods: {
      async submitComment(reset) {
        this.loading = true;
        const postId = this.$route.params.id;
        if (this.authStore.email) {
          await this.postStore.submitComment(postId, this.authStore.email);
          reset();
        } else {
          console.error("User is not logged in or email is not available");
        }
        this.loading = false;
      },
    },
  };
  </script>
  