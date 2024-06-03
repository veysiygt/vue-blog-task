<template>
  <div
    class="min-h-screen flex items-center justify-center bg-cover bg-center p-4"
  >
    <div
      class="max-w-md w-full bg-white bg-opacity-90 shadow-md rounded-lg p-8"
    >
      <h2 class="text-2xl font-bold mb-6 text-center">Login</h2>
      <ValidationObserver v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(validateAndLogin)">
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="email"
              >Email</label
            >
            <EmailInput v-model="form.email" />
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="password"
              >Password</label
            >
            <PasswordInput v-model="form.password" />
          </div>
          <div v-if="loginError" class="mb-2 text-red-500 text-sm">
            {{ loginError }}
          </div>
          <div class="flex items-center justify-between">
            <CustomButton type="submit">Sign In</CustomButton>
          </div>
        </form>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
import { ValidationObserver } from "vee-validate";
import { useAuthStore } from "../stores/auth";
import CustomButton from "../components/CustomButton.vue";
import EmailInput from "../components/EmailInput.vue";
import PasswordInput from "../components/PasswordInput.vue";
import "../validations/loginValidation"; 

export default {
  name: "LoginPage",
  data() {
    return {
      form: { email: "", password: "" },
      authStore: useAuthStore(),
      loginError: "",
    };
  },
  methods: {
    validateAndLogin() {
      const { email, password } = this.form;
      if (email === "test@test.com" && password === "test") {
        this.authStore.login(email);
        this.$router.push("/home");
      } else {
        this.loginError = "Invalid email or password";
      }
    },
  },
  components: {
    ValidationObserver,
    CustomButton,
    EmailInput,
    PasswordInput,
  },
};
</script>
