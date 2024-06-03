<template>
  <div class="p-4 bg-gray-100 rounded-lg shadow-inner">
    <h2 class="text-2xl font-bold text-gray-800 mb-2">Comments</h2>
    <div v-if="comments.length">
      <div
        v-for="comment in comments"
        :key="comment.id"
        class="bg-white p-4 rounded-lg shadow mb-3"
      >
        <div class="flex items-center mb-2">
          <font-awesome-icon icon="user" class="text-gray-600 mr-2" />
          <p class="font-semibold text-gray-800">{{ comment.email }}</p>
        </div>
        <p class="text-gray-700">{{ comment.body }}</p>
      </div>
    </div>
    <div v-else class="text-gray-700">No comments available.</div>
  </div>
</template>

<script>
export default {
  name: "UserComments",
  props: {
    comments: {
      type: Array,
      required: true,
    },
  },
};
</script>
