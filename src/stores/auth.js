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
      localStorage.setItem("email", email);
      localStorage.setItem("isAuthenticated", "true");
    },
    logout() {
      this.email = "";
      this.isAuthenticated = false;
      localStorage.removeItem("email");
      localStorage.removeItem("isAuthenticated");
    },
    checkAuth() {
      const storedEmail = localStorage.getItem("email");
      const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
      if (storedEmail && isAuthenticated) {
        this.email = storedEmail;
        this.isAuthenticated = true;
      } else {
        this.email = "";
        this.isAuthenticated = false;
      }
    },
  },
});