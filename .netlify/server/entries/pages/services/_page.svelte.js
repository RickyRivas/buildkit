import { c as create_ssr_component, s as subscribe, a as add_attribute, e as escape, v as validate_component } from "../../../chunks/ssr.js";
import { S as SubNavigation } from "../../../chunks/SubNavigation.js";
import { p as pages, U as URL, c as companyName, a as cityAndState } from "../../../chunks/config.js";
import { p as page } from "../../../chunks/stores.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const thisPage = pages.find((p) => p.path === $page.route.id);
  const pageTitle = $page.route.id?.slice(1);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1oy71g7_START --><link rel="canonical"${add_attribute("href", URL + $page.route.id, 0)}><meta name="description"${add_attribute("content", thisPage?.metaDescription, 0)}><meta property="og:description"${add_attribute("content", thisPage?.metaDescription, 0)}>${$$result.title = `<title>${escape(companyName)} | ${escape(thisPage?.name)} | ${escape(cityAndState)}</title>`, ""}<!-- HEAD_svelte-1oy71g7_END -->`, ""} ${validate_component(SubNavigation, "SubNavigation").$$render($$result, { pageTitle }, {}, {})} <h1 data-svelte-h="svelte-tqclos">services</h1>`;
});
export {
  Page as default
};
