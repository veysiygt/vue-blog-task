<template>
  <ValidationProvider
    name="password"
    rules="required|min:4"
    v-slot="{ errors }"
  >
    <div class="relative">
      <span class="absolute inset-y-0 left-0 flex items-center pl-3">
        <font-awesome-icon icon="lock" class="text-gray-500" />
      </span>
      <input
        v-model="password"
        @input="$emit('input', password)"
        :class="[
          'shadow appearance-none border-4 rounded w-full py-2 pl-10 pr-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
          {
            'border-red-500': errors.length,
            'border-gray-300': !errors.length,
          },
        ]"
        :type="passwordFieldType"
        id="password"
        name="password"
        placeholder="••••••••"
      />
      <span class="absolute inset-y-0 right-0 flex items-center pr-3">
        <font-awesome-icon
          :icon="passwordFieldType === 'password' ? 'eye-slash' : 'eye'"
          class="text-gray-500 cursor-pointer"
          @click="togglePasswordVisibility"
        />
      </span>
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
  name: "PasswordInput",
  props: {
    value: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      password: this.value,
      passwordFieldType: "password",
    };
  },
  methods: {
    togglePasswordVisibility() {
      this.passwordFieldType =
        this.passwordFieldType === "password" ? "text" : "password";
    },
  },
  watch: {
    value(newVal) {
      this.password = newVal;
    },
  },
};
</script>
