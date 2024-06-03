export function filterPosts(posts, query) {
  const lowerCaseQuery = query.toLowerCase();
  return posts.filter(
    (post) =>
      post.title.toLowerCase().includes(lowerCaseQuery) ||
      post.body.toLowerCase().includes(lowerCaseQuery)
  );
}
