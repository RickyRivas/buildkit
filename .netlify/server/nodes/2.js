import * as universal from '../entries/pages/_page.js';
import * as server from '../entries/pages/_page.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.5MrGkzR6.js","_app/immutable/chunks/scheduler.BT1NTskS.js","_app/immutable/chunks/index.D8FtfjPv.js","_app/immutable/chunks/SEO.DFKsBzIn.js","_app/immutable/chunks/stores.BIlNBaCg.js","_app/immutable/chunks/entry.CLUwkMOR.js"];
export const stylesheets = [];
export const fonts = [];
