import { c as create_ssr_component, e as escape } from "./ssr.js";
const SubNavigation_svelte_svelte_type_style_lang = "";
const css = {
  code: '#subheader.svelte-129sks3.svelte-129sks3{background:#000;display:flex;justify-content:center;align-items:flex-end;padding:8em 0 2em;position:relative;isolation:isolate}@media only screen and (min-width: 768px){#subheader.svelte-129sks3.svelte-129sks3{text-align:left;padding:0 0 3em 0;height:18.65em}}#subheader.svelte-129sks3.svelte-129sks3::before{content:"";width:100%;height:100%;position:absolute;top:0;left:0;z-index:-1;background:linear-gradient(90.01deg, #27631a 16.86%, rgba(0, 0, 0, 0) 100%)}#subheader.svelte-129sks3 .container.svelte-129sks3{text-align:center;width:96%;max-width:60em;margin:0 auto}@media only screen and (min-width: 768px){#subheader.svelte-129sks3 .container.svelte-129sks3{text-align:left}}#subheader.svelte-129sks3 h1.svelte-129sks3{color:white;font-weight:bold;font-size:2.45em;line-height:1.2;text-transform:uppercase}',
  map: null
};
const SubNavigation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pageTitle } = $$props;
  if ($$props.pageTitle === void 0 && $$bindings.pageTitle && pageTitle !== void 0)
    $$bindings.pageTitle(pageTitle);
  $$result.css.add(css);
  return `<section id="subheader" class="svelte-129sks3"><div class="container svelte-129sks3"><h1 class="svelte-129sks3">${escape(pageTitle)}</h1></div> </section>`;
});
export {
  SubNavigation as S
};
