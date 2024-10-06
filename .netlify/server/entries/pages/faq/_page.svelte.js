import { c as create_ssr_component, s as subscribe, v as validate_component, e as escape } from "../../../chunks/ssr.js";
import { S as SubNavigation } from "../../../chunks/SubNavigation.js";
import { I as InteriorLayout } from "../../../chunks/InteriorLayout.js";
import { b as business, p as page } from "../../../chunks/stores.js";
import { S as SEO } from "../../../chunks/SEO.js";
import { a as findPage } from "../../../chunks/index2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let thisPage = findPage(business, $page.route.id);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(SEO, "SEO").$$render(
      $$result,
      {
        title: thisPage?.title,
        description: thisPage?.description,
        imageURL: thisPage?.imageURL,
        canonical: $page.url.href,
        siteName: business.name,
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
    )} ${validate_component(SubNavigation, "SubNavigation").$$render(
      $$result,
      {
        pageTitle: thisPage?.title,
        pagePath: thisPage.path,
        pageName: thisPage.name
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
          return `<h1>${escape(thisPage.title)}</h1>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});
export {
  Page as default
};
