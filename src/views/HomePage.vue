<template>
  <div class="container mx-auto p-4">
    <div class="flex justify-between items-center mb-12">
      <h1 class="text-4xl font-bold text-indigo-600">Blog Posts</h1>
      <UserDropdown />
    </div>
    <SearchInput v-model="searchQuery" />
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <PostItem
        v-for="post in filteredPosts"
        :key="post.id"
        :post="post"
        @view-details="viewDetails"
      />
    </div>
  </div>
</template>

<script>
import { useAuthStore } from "../stores/auth";
import { usePostStore } from "../stores/post";
import PostItem from "../components/PostItem.vue";
import UserDropdown from "../components/UserDropdown.vue";
import SearchInput from "../components/SearchInput.vue";
import { filterPosts } from "../utils/filter";

export default {
  name: "HomePage",
  components: {
    PostItem,
    UserDropdown,
    SearchInput,
  },
  data() {
    const authStore = useAuthStore();
    const postStore = usePostStore();
    return {
      searchQuery: "",
      filteredPosts: [],
      authStore,
      postStore,
    };
  },
  watch: {
    searchQuery: "filterPosts",
    "postStore.posts": "filterPosts",
  },
  methods: {
    filterPosts() {
      this.filteredPosts = filterPosts(this.postStore.posts, this.searchQuery);
    },
    viewDetails(postId) {
      this.$router.push({ name: "PostDetails", params: { id: postId } });
    },
    logout() {
      this.authStore.logout();
      this.$router.push("/");
    },
  },
  created() {
    this.postStore.fetchPosts();
    this.filterPosts();
  },
};
</script>
