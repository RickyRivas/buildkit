import { c as create_ssr_component, s as subscribe, v as validate_component, e as escape } from "../../chunks/ssr.js";
import { S as SubNavigation } from "../../chunks/SubNavigation.js";
import { p as page } from "../../chunks/stores.js";
const _error_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-1vg61md.svelte-1vg61md{padding:3em 0}.container.svelte-1vg61md.svelte-1vg61md{margin:0 auto;width:96%;max-width:60em}.container.svelte-1vg61md h2.svelte-1vg61md{font-size:2em;margin-bottom:0.5em}.container.svelte-1vg61md a.svelte-1vg61md{background-color:#000;color:white;text-decoration:none;padding:0.5em 1em;transition:background-color 0.33s ease}.container.svelte-1vg61md a.svelte-1vg61md:hover,.container.svelte-1vg61md a.svelte-1vg61md:focus-visible{background-color:var(--primary-color)}",
  map: null
};
let pageTitle = "Error";
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${validate_component(SubNavigation, "SubNavigation").$$render($$result, { pageTitle }, {}, {})} <section class="svelte-1vg61md"><div class="container svelte-1vg61md"><span data-svelte-h="svelte-7pgl8t">Message:</span> <h2 class="svelte-1vg61md">${escape($page.status)}: ${escape($page?.error?.message)}</h2> <a href="/" class="btn svelte-1vg61md" data-svelte-h="svelte-18cb5dh">Go Home</a></div> </section>`;
});
export {
  Error as default
};
