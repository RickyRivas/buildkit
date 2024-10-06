import { c as create_ssr_component } from "../../chunks/ssr.js";
const Homecontent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<span class="subheading" data-svelte-h="svelte-12qvmk1">About Our Community</span> <h2 data-svelte-h="svelte-1e490ef">Discover Oxford Park</h2> <p data-svelte-h="svelte-1nc4azd">Oxford Park is a vibrant community in Tulsa, Oklahoma established in 2004. Our family-friendly community offers a suburban style of living with excellent amenities, including:</p> <ul data-svelte-h="svelte-15l167z"><li>Community pool for summer relaxation</li> <li>Community park for families with young children</li> <li>Community pond to admire and/or fish</li> <li>Walking trail for walks with family and fur babies</li> <li>Spacious clubhouse for community and resident events</li> <li>Open space field for sports enthusiasts and resident events</li> <li>Well maintained streets and landscaping</li> <li>A community with active events and programs for all</li></ul> <p data-svelte-h="svelte-1mfashw">Located near Tulsa’s desirable suburbs, Oxford Park combines convenience with a strong sense of community, making it an ideal community to call home.</p>`;
});
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Homecontent
}, Symbol.toStringTag, { value: "Module" }));
const load = async () => {
  const homeContentFile = /* @__PURE__ */ Object.assign({ "/src/lib/cms/homecontent.md": __vite_glob_0_0 });
  const Content = homeContentFile["/src/lib/cms/homecontent.md"].default;
  return {
    Content
  };
};
export {
  load
};
