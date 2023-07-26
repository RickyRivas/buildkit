import * as universal from '../entries/pages/faq/_page.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/faq/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/faq/+page.js";
export const imports = ["_app/immutable/nodes/5.10fed762.js","_app/immutable/chunks/scheduler.b0c1c2c3.js","_app/immutable/chunks/index.6b3f7f9e.js"];
export const stylesheets = [];
export const fonts = [];
