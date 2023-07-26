

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.d9d1f463.js","_app/immutable/chunks/scheduler.b0c1c2c3.js","_app/immutable/chunks/index.6b3f7f9e.js","_app/immutable/chunks/stores.de4d102a.js","_app/immutable/chunks/singletons.f5edb080.js"];
export const stylesheets = [];
export const fonts = [];
