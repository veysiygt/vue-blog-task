<template>
  <div class="p-4 mb-6 bg-gray-100 rounded-lg shadow-inner">
    <h2 class="text-2xl font-bold text-gray-800 mb-2">Author Information</h2>
    <div class="flex items-center mb-2">
      <font-awesome-icon icon="user" class="text-gray-600 mr-2" />
      <p class="text-gray-700">
        <strong>{{ user.name }}</strong>
      </p>
    </div>
    <div class="flex items-center mb-2">
      <font-awesome-icon icon="envelope" class="text-gray-600 mr-2" />
      <p class="text-gray-700">{{ user.email }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AuthorInfo",
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>
