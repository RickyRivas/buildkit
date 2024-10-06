import { c as create_ssr_component, b as add_attribute, e as escape } from "./ssr.js";
import { b as business } from "./stores.js";
const SubNavigation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pageTitle, pageName, pagePath } = $$props;
  let subnav;
  if ($$props.pageTitle === void 0 && $$bindings.pageTitle && pageTitle !== void 0)
    $$bindings.pageTitle(pageTitle);
  if ($$props.pageName === void 0 && $$bindings.pageName && pageName !== void 0)
    $$bindings.pageName(pageName);
  if ($$props.pagePath === void 0 && $$bindings.pagePath && pagePath !== void 0)
    $$bindings.pagePath(pagePath);
  return `<section id="subheader"${add_attribute("this", subnav, 0)}><div class="container"><span class="subnav-subheading">${escape(business.name)}</span> <h1>${escape(pageTitle)}</h1> <div class="mod"><a class="prev-page" href="/" data-svelte-h="svelte-1u4dym4">Home</a> <span class="line"></span> <a class="current-page"${add_attribute("href", pagePath, 0)}>${escape(pageName)}</a></div></div></section>`;
});
export {
  SubNavigation as S
};
