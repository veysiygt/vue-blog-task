<template>
  <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg">
    <a href="#">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
        {{ post.title }}
      </h5>
    </a>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
      {{ post.body }}
    </p>
    <button
      @click="viewDetails"
      class="text-blue-700 hover:underline inline-flex items-center"
    >
      View Details
      <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: "PostItem",
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  methods: {
    viewDetails() {
      this.$router.push({ name: 'PostDetails', params: { id: this.post.id } });
    },
  },
};
</script>