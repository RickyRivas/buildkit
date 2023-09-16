import * as universal from '../entries/pages/faq/_page.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/faq/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/faq/+page.js";
export const imports = ["_app/immutable/nodes/5.54e3a4f8.js","_app/immutable/chunks/scheduler.e3a1d36e.js","_app/immutable/chunks/index.adfe35ae.js","_app/immutable/chunks/SubNavigation.0cda6847.js","_app/immutable/chunks/config.6867a560.js","_app/immutable/chunks/stores.e2de0897.js","_app/immutable/chunks/singletons.19a20642.js"];
export const stylesheets = ["_app/immutable/assets/SubNavigation.e4930bf6.css"];
export const fonts = [];
