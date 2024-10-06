const prerender = true;
const load = async ({ fetch }) => {
  const res = await fetch("/api/fetchBlogPosts");
  const posts = await res.json();
  return { posts };
};
export {
  load,
  prerender
};
