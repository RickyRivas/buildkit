import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { S as SEO } from "../../../../chunks/SEO.js";
import { S as SubNavigation } from "../../../../chunks/SubNavigation.js";
import { I as InteriorLayout } from "../../../../chunks/InteriorLayout.js";
import { b as business } from "../../../../chunks/stores.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { author, date, description, imageAlt, tags, thumbnail, title } = data.postData;
  const { path, Content } = data;
  let thisPage = business.interiorPages.find((page) => page.path === "/blog");
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(SubNavigation, "SubNavigation").$$render(
      $$result,
      {
        pageTitle: title,
        pagePath: path,
        pageName: title
      },
      {},
      {}
    )} ${validate_component(SEO, "SEO").$$render(
      $$result,
      {
        title,
        description,
        author,
        siteName: business.name,
        canonical: `${business.canonical}/${path}`,
        imageURL: thumbnail,
        index: true,
        twitter: true,
        openGraph: true,
        schemaOrg: false
      },
      {},
      {}
    )} ${validate_component(InteriorLayout, "InteriorLayout").$$render(
      $$result,
      { thisPage },
      {
        thisPage: ($$value) => {
          thisPage = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(Content, "Content").$$render($$result, {}, {}, {})}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
