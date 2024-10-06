import { j as json } from "../../../../chunks/index.js";
import { f as fetchMarkdownPosts } from "../../../../chunks/index2.js";
const GET = async () => {
  const posts = await fetchMarkdownPosts();
  return json(posts);
};
export {
  GET
};
