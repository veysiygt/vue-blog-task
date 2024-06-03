<template>
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
</template>

<script>
import CustomButton from "@/components/CustomButton.vue";
import CommentInput from "@/components/CommentInput.vue";

import { usePostStore } from "@/stores/post";
import { useAuthStore } from "@/stores/auth";
import { ValidationObserver } from "vee-validate";

export default {
  name: "AddComment",
  components: {
    CustomButton,
    CommentInput,
    ValidationObserver,
  },
  props: {
    loading: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    const postStore = usePostStore();
    const authStore = useAuthStore();

    return {
      postStore,
      authStore,
      newComment: postStore.newComment,
    };
  },
  methods: {
    async submitComment(reset) {
      this.$emit("loading");
      const postId = this.$route.params.id;
      if (this.authStore.email) {
        await this.postStore.submitComment(postId, this.authStore.email);
        reset();
      } else {
        console.error("User is not logged in or email is not available");
      }
      this.$emit("loaded");
    },
  },
};
</script>
