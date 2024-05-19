import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.DoFleR5n.js","_app/immutable/chunks/scheduler.BT1L_XGg.js","_app/immutable/chunks/index.DlmjD8Qe.js"];
export const stylesheets = ["_app/immutable/assets/2.BC1pUAJC.css"];
export const fonts = [];
