<template>
  <ValidationProvider name="email" rules="required|email" v-slot="{ errors }">
    <div class="relative">
      <span class="absolute inset-y-0 left-0 flex items-center pl-3">
        <font-awesome-icon icon="envelope" class="text-gray-500" />
      </span>
      <input
        v-model="email"
        @input="$emit('input', email)"
        :class="[
          'shadow appearance-none border-4 rounded w-full py-2 pl-10 pr-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
          {
            'border-red-500': errors.length,
            'border-gray-300': !errors.length,
          },
        ]"
        id="email"
        type="email"
        name="email"
        placeholder="Email"
      />
      <span
        v-if="errors.length"
        class="text-red-500 text-sm absolute left-0 -bottom-5 w-full"
        >{{ errors[0] }}</span
      >
    </div>
  </ValidationProvider>
</template>

<script>
export default {
  name: "EmailInput",
  props: {
    value: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      email: this.value,
    };
  },
  watch: {
    value(newVal) {
      this.email = newVal;
    },
  },
};
</script>
