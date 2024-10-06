import { e as error } from "../../../../chunks/index.js";
const __variableDynamicImportRuntimeHelper = (glob, path) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, new Error("Unknown variable dynamic import: " + path)));
  });
};
async function load({ params }) {
  const requestedPost = params.post;
  try {
    const foundMDFile = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../../../lib/blogposts/5-essential-web-design-tips-for-a-seamless-user-experience.md": () => import("../../../../chunks/5-essential-web-design-tips-for-a-seamless-user-experience.js") }), `../../../lib/blogposts/${requestedPost}.md`);
    return {
      postData: foundMDFile.metadata,
      path: requestedPost,
      Content: foundMDFile.default
    };
  } catch (e) {
    throw error(404, {
      message: "Post Not found"
    });
  }
}
export {
  load
};
