

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.0c823fc2.js","_app/immutable/chunks/scheduler.b0c1c2c3.js","_app/immutable/chunks/index.6b3f7f9e.js","_app/immutable/chunks/stores.de4d102a.js","_app/immutable/chunks/singletons.f5edb080.js"];
export const stylesheets = ["_app/immutable/assets/0.579dae1a.css"];
export const fonts = [];
