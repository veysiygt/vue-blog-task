import Vue from "vue";
import { createPinia, defineStore } from "pinia";

Vue.use(createPinia());

export const useAuthStore = defineStore("auth", {
  state: () => ({
    email: "",
    isAuthenticated: false,
  }),
  actions: {
    login(email) {
      this.email = email;
      this.isAuthenticated = true;
    },
    logout() {
      this.email = "";
      this.isAuthenticated = false;
    },
    checkAuth() {
      if (this.email && this.isAuthenticated) {
        this.isAuthenticated = true;
      } else {
        this.isAuthenticated = false;
      }
    },
  },
});
