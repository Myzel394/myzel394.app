

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.g4iIzkvC.js","_app/immutable/chunks/scheduler.BT1L_XGg.js","_app/immutable/chunks/index.DlmjD8Qe.js","_app/immutable/chunks/entry.Cl29TzA-.js"];
export const stylesheets = [];
export const fonts = [];
