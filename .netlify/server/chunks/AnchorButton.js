import { c as create_ssr_component, e as escape, b as add_attribute } from "./ssr.js";
const AnchorButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { formButton = false, disabled = false, link = "", text, screenreader = "" } = $$props;
  if ($$props.formButton === void 0 && $$bindings.formButton && formButton !== void 0)
    $$bindings.formButton(formButton);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.screenreader === void 0 && $$bindings.screenreader && screenreader !== void 0)
    $$bindings.screenreader(screenreader);
  return `${formButton ? `<button class="btn newbtn" ${disabled ? "disabled" : ""}><span class="text">${escape(text)}</span> <span class="screenreader">${escape(screenreader)}</span> <span class="arrow" data-svelte-h="svelte-74n46l"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" aria-hidden="true" role="img"><path fill="currentcolor" d="M11.92 5.62a1 1 0 0 0-.21-.33l-5-5a1.004 1.004 0 0 0-1.42 1.42L8.59 5H1a1 1 0 1 0 0 2h7.59l-3.3 3.29a.999.999 0 0 0 0 1.42 1 1 0 0 0 1.42 0l5-5a1 1 0 0 0 .21-.33 1 1 0 0 0 0-.76Z"></path></svg></span></button>` : `<a${add_attribute("href", link, 0)} class="btn newbtn"><span class="text">${escape(text)}</span> <span class="screenreader">${escape(screenreader)}</span> <span class="arrow" data-svelte-h="svelte-74n46l"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" aria-hidden="true" role="img"><path fill="currentcolor" d="M11.92 5.62a1 1 0 0 0-.21-.33l-5-5a1.004 1.004 0 0 0-1.42 1.42L8.59 5H1a1 1 0 1 0 0 2h7.59l-3.3 3.29a.999.999 0 0 0 0 1.42 1 1 0 0 0 1.42 0l5-5a1 1 0 0 0 .21-.33 1 1 0 0 0 0-.76Z"></path></svg></span></a>`}`;
});
export {
  AnchorButton as A
};
