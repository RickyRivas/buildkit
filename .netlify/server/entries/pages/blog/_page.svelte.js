import { c as create_ssr_component, s as subscribe, v as validate_component, a as each, e as escape, b as add_attribute } from "../../../chunks/ssr.js";
import { S as SubNavigation } from "../../../chunks/SubNavigation.js";
import { I as InteriorLayout } from "../../../chunks/InteriorLayout.js";
import { S as SEO } from "../../../chunks/SEO.js";
import { a as findPage, b as formatDate } from "../../../chunks/index2.js";
import { b as business, p as page } from "../../../chunks/stores.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  const { posts } = data;
  if (posts[0])
    posts[0].postData.latest = true;
  let thisPage = findPage(business, $page.route.id);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(SEO, "SEO").$$render(
      $$result,
      {
        title: "Our Blog",
        description: "Welcome to the blog of " + business.name,
        canonical: `${business.canonical}/blog`,
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
          return `<section id="blog-posts">${posts.length === 0 ? `<h2 data-svelte-h="svelte-1bybg0n">No available posts.</h2>` : `<h2 data-svelte-h="svelte-10u01kk">Our recent posts</h2> <div class="posts">${each(posts, ({ postData, path }) => {
            return `<article class="${"post " + escape(postData.latest ? "latest" : "", true)}"><div class="thumbnail"><img${add_attribute("src", postData.thumbnail, 0)}${add_attribute("alt", postData.imageAlt, 0)} decoding="async"></div> <div class="tags"><span data-svelte-h="svelte-1j0hbyd">Tags:</span> ${each(postData.tags, (tag) => {
              return `<span>${escape(tag)}</span>`;
            })}</div> <h3><a${add_attribute("href", "blog/" + path.replace(".md", ""), 0)}>${escape(postData.title)}</a></h3> <p class="description">${escape(postData.description.substring(0, 80) + "...")}</p> <p class="author">Written by ${escape(postData.author)}</p> <p class="date">${escape(formatDate(postData.date))}</p> </article>`;
          })}</div>`}</section>`;
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
