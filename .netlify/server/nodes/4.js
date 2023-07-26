import * as universal from '../entries/pages/contact/_page.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contact/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/contact/+page.js";
export const imports = ["_app/immutable/nodes/4.0dd35a24.js","_app/immutable/chunks/scheduler.b0c1c2c3.js","_app/immutable/chunks/index.6b3f7f9e.js"];
export const stylesheets = [];
export const fonts = [];
