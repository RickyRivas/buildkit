import { c as create_ssr_component, d as createEventDispatcher, b as add_attribute, s as subscribe, v as validate_component } from "../../../chunks/ssr.js";
import "devalue";
import { b as business, p as page } from "../../../chunks/stores.js";
import { S as SubNavigation } from "../../../chunks/SubNavigation.js";
import { I as InteriorLayout } from "../../../chunks/InteriorLayout.js";
import { A as AnchorButton } from "../../../chunks/AnchorButton.js";
import { S as SEO } from "../../../chunks/SEO.js";
import { a as findPage } from "../../../chunks/index2.js";
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let modal, modalContainer;
  let { custom = false } = $$props;
  let { disable = false } = $$props;
  createEventDispatcher();
  if ($$props.custom === void 0 && $$bindings.custom && custom !== void 0)
    $$bindings.custom(custom);
  if ($$props.disable === void 0 && $$bindings.disable && disable !== void 0)
    $$bindings.disable(disable);
  return `      <div id="modal" role="dialog" aria-modal="true" aria-label="Dialog Window (Press escape to close)" tabindex="-1" aria-hidden="false"${add_attribute("this", modal, 0)}><div class="modal-backdrop"></div> ${custom ? `${slots.default ? slots.default({}) : ``}` : `<div class="modal" role="document"${add_attribute("this", modalContainer, 0)}>${slots.default ? slots.default({}) : ``}</div>`} ${!disable ? `<button id="close-modal" aria-label="Close (Press escape to close)" data-svelte-h="svelte-f6ljcj"><svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" viewBox="0 0 25 25"><path fill="#D9D9D9" d="M25 1.382 23.618 0 12.5 11.118 1.382 0 0 1.382 11.118 12.5 0 23.618 1.382 25 12.5 13.882 23.618 25 25 23.618 13.882 12.5 25 1.382Z"></path></svg></button>` : ``}</div>`;
});
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
    $$rendered = `  ${validate_component(SEO, "SEO").$$render(
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
    )} ${`${validate_component(Modal, "Modal").$$render($$result, {}, {}, {
      default: () => {
        return `<p data-svelte-h="svelte-7kmuxm">Our reservation booking software is temporarily unavailable. Please check back soon.</p>`;
      }
    })}`} ${validate_component(InteriorLayout, "InteriorLayout").$$render(
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
          return `<h2 data-svelte-h="svelte-2b02cs">Get in touch.</h2> <p data-svelte-h="svelte-1bkzn9z">Let us know if you have any questions or would like to talk about a potential project. We
    respond to every call or email we get!</p> <form id="contact-form" method="post" name="contact"><input type="hidden" name="form-name" value="contact"> <div class="form-control" data-svelte-h="svelte-153b3s9"><label for="fname">Name</label> <input id="fname" type="text" name="Name" placeholder="Name" required></div> <div class="form-control"><label for="subject" class="dropdown" data-svelte-h="svelte-1t44f1w">Subject:</label> <select id="subject" name="Subject" form="contact-form"><option value="" disabled selected data-svelte-h="svelte-bev6dr">Please select an option</option><option value="Complaint" data-svelte-h="svelte-4hnv4">Complaint</option><option value="Compliment" data-svelte-h="svelte-1wpia12">Compliment</option><option value="Suggestion" data-svelte-h="svelte-1ritmie">Suggestion</option><option value="Question" data-svelte-h="svelte-kg4qce">Question</option></select></div> <div class="form-control" data-svelte-h="svelte-7qme5f"><label for="email-input">Email</label> <input id="email-input" type="email" name="Email" placeholder="Email" required></div> <div class="form-control" data-svelte-h="svelte-1ewhj46"><label for="phone-input">Phone Number</label> <input id="phone-input" type="number" name="Phone" placeholder="Phone" required=""></div> <div class="form-control" data-svelte-h="svelte-1p9vmtg"><label for="message-input">How can we help?</label> <textarea id="message-input" name="Message" cols="20" rows="5" placeholder="Enter message..."></textarea></div>     ${validate_component(AnchorButton, "AnchorButton").$$render(
            $$result,
            {
              text: "Submit",
              formButton: true,
              disabled: true
            },
            {},
            {}
          )} </form>`;
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
