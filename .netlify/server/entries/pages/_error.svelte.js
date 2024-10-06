import { c as create_ssr_component, s as subscribe, v as validate_component, e as escape } from "../../chunks/ssr.js";
import { S as SubNavigation } from "../../chunks/SubNavigation.js";
import { p as page } from "../../chunks/stores.js";
const css = {
  code: "section.svelte-1vg61md.svelte-1vg61md{padding:3em 0}.container.svelte-1vg61md.svelte-1vg61md{margin:0 auto;width:96%;max-width:60em}.container.svelte-1vg61md h2.svelte-1vg61md{font-size:2em;margin-bottom:0.5em}.container.svelte-1vg61md a.svelte-1vg61md{background-color:#000;color:white;text-decoration:none;padding:0.5em 1em;transition:background-color 0.33s ease}.container.svelte-1vg61md a.svelte-1vg61md:hover,.container.svelte-1vg61md a.svelte-1vg61md:focus-visible{background-color:var(--primary-color)}",
  map: '{"version":3,"file":"+error.svelte","sources":["+error.svelte"],"sourcesContent":["<script lang=\\"ts\\">import SubNavigation from \\"$lib/components/SubNavigation.svelte\\";\\nimport { page } from \\"$app/stores\\";\\nlet pageTitle = \\"Error\\";\\n<\/script>\\n\\n<SubNavigation {pageTitle} />\\n\\n<section>\\n  <div class=\\"container\\">\\n    <span>Message:</span>\\n    <h2>{$page.status}: {$page?.error?.message}</h2>\\n    <a href=\\"/\\" class=\\"btn\\">Go Home</a>\\n  </div>\\n</section>\\n\\n<style lang=\\"less\\">section {\\n  padding: 3em 0;\\n}\\n.container {\\n  margin: 0 auto;\\n  width: 96%;\\n  max-width: 60em;\\n}\\n.container h2 {\\n  font-size: 2em;\\n  margin-bottom: 0.5em;\\n}\\n.container a {\\n  background-color: #000;\\n  color: white;\\n  text-decoration: none;\\n  padding: 0.5em 1em;\\n  transition: background-color 0.33s ease;\\n}\\n.container a:hover,\\n.container a:focus-visible {\\n  background-color: var(--primary-color);\\n}\\n</style>\\n"],"names":[],"mappings":"AAemB,qCAAQ,CACzB,OAAO,CAAE,GAAG,CAAC,CACf,CACA,wCAAW,CACT,MAAM,CAAE,CAAC,CAAC,IAAI,CACd,KAAK,CAAE,GAAG,CACV,SAAS,CAAE,IACb,CACA,yBAAU,CAAC,iBAAG,CACZ,SAAS,CAAE,GAAG,CACd,aAAa,CAAE,KACjB,CACA,yBAAU,CAAC,gBAAE,CACX,gBAAgB,CAAE,IAAI,CACtB,KAAK,CAAE,KAAK,CACZ,eAAe,CAAE,IAAI,CACrB,OAAO,CAAE,KAAK,CAAC,GAAG,CAClB,UAAU,CAAE,gBAAgB,CAAC,KAAK,CAAC,IACrC,CACA,yBAAU,CAAC,gBAAC,MAAM,CAClB,yBAAU,CAAC,gBAAC,cAAe,CACzB,gBAAgB,CAAE,IAAI,eAAe,CACvC"}'
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
