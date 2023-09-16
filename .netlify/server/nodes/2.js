import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.9b5f6f97.js","_app/immutable/chunks/scheduler.e3a1d36e.js","_app/immutable/chunks/index.adfe35ae.js","_app/immutable/chunks/config.6867a560.js","_app/immutable/chunks/stores.e2de0897.js","_app/immutable/chunks/singletons.19a20642.js"];
export const stylesheets = ["_app/immutable/assets/2.29ca08b9.css"];
export const fonts = [];
