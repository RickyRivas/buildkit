function findPage(business, url) {
  let thisPage;
  let isTopLevelPage = business.interiorPages.find((p) => p.path === url);
  if (!isTopLevelPage) {
    const pagesWithSubPages = business.interiorPages.filter((p) => p.subPages);
    const pageImLookingFor = url;
    for (const pageWithSubPage of pagesWithSubPages) {
      const children = pageWithSubPage.subPages;
      for (const child of children) {
        if (child.path === pageImLookingFor) {
          thisPage = child;
        }
      }
    }
  } else {
    thisPage = isTopLevelPage;
  }
  return thisPage;
}
function formatDate(date) {
  return new Date(date).toLocaleDateString("en-us", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}
const fetchMarkdownPosts = async () => {
  const blogPostsPath = "/src/lib/blogposts/";
  const blogMarkdownFiles = /* @__PURE__ */ Object.assign({ "/src/lib/blogposts/5-essential-web-design-tips-for-a-seamless-user-experience.md": () => import("./5-essential-web-design-tips-for-a-seamless-user-experience.js") });
  const files = Object.entries(blogMarkdownFiles);
  const posts = await Promise.all(
    files.map(async ([postpath, resolver]) => {
      const { metadata: postData } = await resolver();
      const path = postpath.split(blogPostsPath)[1];
      return {
        postData,
        path
      };
    })
  );
  return posts.sort((a, b) => Date.parse(b.postData.date) - Date.parse(a.postData.date));
};
export {
  findPage as a,
  formatDate as b,
  fetchMarkdownPosts as f
};
