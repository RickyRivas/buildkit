import { c as create_ssr_component, s as subscribe, a as add_attribute, e as escape } from "../../chunks/ssr.js";
import { p as pages, U as URL, c as companyName, i as industry, a as cityAndState } from "../../chunks/config.js";
import { p as page } from "../../chunks/stores.js";
const home = "";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const thisPage = pages.find((p) => p.path === $page.route.id);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-xmcrh5_START --><meta property="og:title" content=""><link rel="canonical"${add_attribute("href", URL, 0)}><meta property="og:url"${add_attribute("content", URL, 0)}><meta name="description"${add_attribute("content", thisPage?.metaDescription, 0)}><meta property="og:description"${add_attribute("content", thisPage?.metaDescription, 0)}>${$$result.title = `<title>${escape(companyName)} | ${escape(industry)} | ${escape(cityAndState)}</title>`, ""}<!-- HEAD_svelte-xmcrh5_END -->`, ""} <section id="landing" data-svelte-h="svelte-1szvg71"><div class="content"><span>Made with Sveltekit</span> <h1>Web development,<br> streamlined</h1> <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates adipisci et magni
      laborum, voluptatibus omnis soluta numquam neque eaque inventore.</p> <a href="/" class="cta">Read the docs</a></div> <img class="hero" src="/img01.jpg" alt="laptop" width="500" height="610" decoding="async"></section>`;
});
export {
  Page as default
};
