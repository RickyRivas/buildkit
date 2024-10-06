import * as universal from '../entries/pages/blog/_page.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/blog/+page.js";
export const imports = ["_app/immutable/nodes/4.BmwYBfnI.js","_app/immutable/chunks/scheduler.BT1NTskS.js","_app/immutable/chunks/index.D8FtfjPv.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/SubNavigation.szBcYb6c.js","_app/immutable/chunks/stores.BIlNBaCg.js","_app/immutable/chunks/entry.CLUwkMOR.js","_app/immutable/chunks/InteriorLayout.23vVdr0I.js","_app/immutable/chunks/AnchorButton.B0-MH4Nu.js","_app/immutable/chunks/SEO.DFKsBzIn.js","_app/immutable/chunks/index.DQxzNBZb.js"];
export const stylesheets = ["_app/immutable/assets/InteriorLayout.Dw0pMv3N.css"];
export const fonts = [];
