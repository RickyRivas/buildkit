

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.c058286c.js","_app/immutable/chunks/scheduler.e3a1d36e.js","_app/immutable/chunks/index.adfe35ae.js","_app/immutable/chunks/config.6867a560.js","_app/immutable/chunks/stores.780d708e.js","_app/immutable/chunks/singletons.d7ef65df.js"];
export const stylesheets = ["_app/immutable/assets/0.f82651cd.css"];
export const fonts = [];
