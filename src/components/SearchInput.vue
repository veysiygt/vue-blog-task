<template>
  <div class="relative mb-8">
    <span class="absolute inset-y-0 left-0 flex items-center pl-3">
      <font-awesome-icon :icon="['fas', 'magnifying-glass']" class="text-gray-500" />
    </span>
    <input
      v-model="localQuery"
      @input="updateQuery"
      class="shadow appearance-none border rounded w-full py-3 pl-10 pr-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      type="text"
      placeholder="Search posts"
    />
  </div>
</template>

<script>
export default {
  name: "SearchInput",
  props: {
    value: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      localQuery: this.value,
    };
  },
  watch: {
    value(newVal) {
      this.localQuery = newVal;
    },
  },
  methods: {
    updateQuery() {
      this.$emit('input', this.localQuery);
    },
  },
};
</script>