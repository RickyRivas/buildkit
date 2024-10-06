import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
import { S as SEO } from "../../chunks/SEO.js";
import { b as business } from "../../chunks/stores.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(SEO, "SEO").$$render(
    $$result,
    {
      title: business.name + " | " + business.industry + " | " + business.cityAndState,
      description: business.homepage.metaDescription,
      canonical: business.canonical,
      siteName: business.name,
      imageURL: business.ogImage,
      index: true,
      twitter: true,
      openGraph: true,
      schemaOrg: false,
      logo: "",
      author: "",
      name: ""
    },
    {},
    {}
  )} <main data-svelte-h="svelte-tnb9h0"><section id="landing"><div class="content"><span>Made with Sveltekit</span> <h1>Web development,<br> streamlined</h1> <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates adipisci et magni
        laborum, voluptatibus omnis soluta numquam neque eaque inventore.</p> <a href="/" class="cta">Read the docs</a></div> <img class="hero" src="/img01.jpg" alt="laptop" width="500" height="610" decoding="async"></section></main>`;
});
export {
  Page as default
};
