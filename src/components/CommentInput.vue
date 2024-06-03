<template>
  <div class="mb-4">
    <label for="body" class="block text-gray-700 text-sm font-bold mb-2">
      Comment
    </label>
    <ValidationProvider name="body" rules="required|min:5" v-slot="{ errors }">
      <div class="relative">
        <textarea
          :value="value"
          @input="$emit('input', $event.target.value)"
          id="body"
          rows="4"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        ></textarea>
        <span class="text-red-500 text-sm">{{ errors[0] }}</span>
      </div>
    </ValidationProvider>
  </div>
</template>

<script>
import "@/validations/commentValidation";

export default {
  name: "CommentInput",
  props: {
    value: {
      type: String,
      required: true,
    },
  },
};
</script>
