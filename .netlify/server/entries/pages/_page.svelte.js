import { c as create_ssr_component } from "../../chunks/ssr.js";
const home = "";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section id="landing" data-svelte-h="svelte-ktsmxw"><div class="content"><span>Made with Sveltekit</span> <h1>Web development,<br> streamlined</h1> <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates adipisci et magni
      laborum, voluptatibus omnis soluta numquam neque eaque inventore.</p> <a href="/" class="cta">Read the docs</a></div> <img class="hero" src="/img01.jpg" alt="laptop" width="500" height="610" decoding="async" fetchpriority="low"></section>`;
});
export {
  Page as default
};
