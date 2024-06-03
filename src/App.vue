<template>
  <div id="app" class="bg-cover bg-center min-h-screen">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
@import 'tailwindcss/tailwind.css';

body {
  background-color: #111827;
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  margin: 0;
}
</style>