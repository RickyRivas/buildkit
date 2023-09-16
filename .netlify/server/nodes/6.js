import * as universal from '../entries/pages/services/_page.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/services/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/services/+page.js";
export const imports = ["_app/immutable/nodes/6.49bac05c.js","_app/immutable/chunks/scheduler.e3a1d36e.js","_app/immutable/chunks/index.adfe35ae.js","_app/immutable/chunks/SubNavigation.0cda6847.js","_app/immutable/chunks/config.6867a560.js","_app/immutable/chunks/stores.780d708e.js","_app/immutable/chunks/singletons.d7ef65df.js"];
export const stylesheets = ["_app/immutable/assets/SubNavigation.e4930bf6.css"];
export const fonts = [];
