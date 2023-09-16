

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.41ac758b.js","_app/immutable/chunks/scheduler.e3a1d36e.js","_app/immutable/chunks/index.adfe35ae.js","_app/immutable/chunks/SubNavigation.0cda6847.js","_app/immutable/chunks/stores.780d708e.js","_app/immutable/chunks/singletons.d7ef65df.js"];
export const stylesheets = ["_app/immutable/assets/1.7c0acc70.css","_app/immutable/assets/SubNavigation.e4930bf6.css"];
export const fonts = [];
