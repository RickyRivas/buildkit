import * as universal from '../entries/pages/blog/_post_/_page.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_post_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/blog/[post]/+page.js";
export const imports = ["_app/immutable/nodes/5.BA2uYnfE.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/entry.CLUwkMOR.js","_app/immutable/chunks/scheduler.BT1NTskS.js","_app/immutable/chunks/index.D8FtfjPv.js","_app/immutable/chunks/SEO.DFKsBzIn.js","_app/immutable/chunks/stores.BIlNBaCg.js","_app/immutable/chunks/SubNavigation.szBcYb6c.js","_app/immutable/chunks/InteriorLayout.23vVdr0I.js","_app/immutable/chunks/AnchorButton.B0-MH4Nu.js"];
export const stylesheets = ["_app/immutable/assets/InteriorLayout.Dw0pMv3N.css"];
export const fonts = [];
