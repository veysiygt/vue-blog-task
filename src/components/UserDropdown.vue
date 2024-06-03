<template>
  <div class="relative inline-block text-left">
    <div
      @click="toggleDropdown"
      class="cursor-pointer flex items-center space-x-2"
    >
      <font-awesome-icon icon="user" class="text-white text-2xl" />
    </div>
    <div
      v-if="isOpen"
      class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
    >
      <div class="py-1">
        <p class="block px-4 py-2 text-sm text-gray-700">
          {{ authStore.email }}
        </p>
        <button
          @click="logout"
          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
        >
          Logout
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from "../stores/auth";

export default {
  name: "UserDropdown",
  data() {
    const authStore = useAuthStore();
    return {
      isOpen: false,
      authStore,
    };
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    logout() {
      this.authStore.logout();
      this.$router.push("/");
    },
  },
};
</script>
