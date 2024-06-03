import Vue from "vue";
import Router from "vue-router";
import Login from "../views/LoginPage.vue";
import Home from "../views/HomePage.vue";
import { useAuthStore } from "../stores/auth";
import PostDetails from "@/views/PostDetails.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    { path: "/", name: "Login", component: Login },
    {
      path: "/home",
      name: "Home",
      component: Home,
      meta: { requiresAuth: true },
    },
    {
      path: "/posts/:id",
      name: "PostDetails",
      component: PostDetails,
      meta: { requiresAuth: true },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  if (
    to.matched.some((record) => record.meta.requiresAuth) &&
    !authStore.isAuthenticated
  ) {
    next("/");
  } else {
    next();
  }
});

export default router;
