
import root from '../root.svelte';
import { set_building, set_prerendering } from '__sveltekit/environment';
import { set_assets } from '__sveltekit/paths';
import { set_manifest, set_read_implementation } from '__sveltekit/server';
import { set_private_env, set_public_env, set_safe_public_env } from '../../../node_modules/@sveltejs/kit/src/runtime/shared-server.js';

export const options = {
	app_dir: "_app",
	app_template_contains_nonce: false,
	csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
	csrf_check_origin: true,
	embedded: false,
	env_public_prefix: 'PUBLIC_',
	env_private_prefix: '',
	hooks: null, // added lazily, via `get_hooks`
	preload_strategy: "modulepreload",
	root,
	service_worker: false,
	templates: {
		app: ({ head, body, assets, nonce, env }) => "<!doctype html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<link rel=\"icon\" href=\"" + assets + "/favicon.ico\" />\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n        <meta name=\"darkreader-lock\">\n\t\t" + head + "\n\t</head>\n\t<body data-sveltekit-preload-data=\"hover\">\n\t\t<div style=\"display: contents\">" + body + "</div>\n\t</body>\n    <style>\n        @charset \"utf-8\";\n        /***\n            The new CSS reset - version 1.8.5 (last updated 14.6.2023)\n            GitHub page: https://github.com/elad2412/the-new-css-reset\n        ***/\n\n        /*\n            Remove all the styles of the \"User-Agent-Stylesheet\", except for the 'display' property\n            - The \"symbol *\" part is to solve Firefox SVG sprite bug\n            - The \"html\" attribute is exclud, because otherwise a bug in Chrome breaks the CSS hyphens property (https://github.com/elad2412/the-new-css-reset/issues/36)\n         */\n        *:where(:not(html, iframe, canvas, img, svg, video, audio):not(svg *, symbol *)) {\n            all: unset;\n            display: revert;\n        }\n\n        /* Preferred box-sizing value */\n        *,\n        *::before,\n        *::after {\n            box-sizing: border-box;\n        }\n\n        /* Reapply the pointer cursor for anchor tags */\n        a, button {\n            cursor: revert;\n        }\n\n        /* Remove list styles (bullets/numbers) */\n        ol, ul, menu {\n            list-style: none;\n        }\n\n        /* For images to not be able to exceed their container */\n        img {\n            max-inline-size: 100%;\n            max-block-size: 100%;\n        }\n\n        /* removes spacing between cells in tables */\n        table {\n            border-collapse: collapse;\n        }\n\n        /* Safari - solving issue when using user-select:none on the <body> text input doesn't working */\n        input, textarea {\n            -webkit-user-select: auto;\n        }\n\n        /* revert the 'white-space' property for textarea elements on Safari */\n        textarea {\n            white-space: revert;\n        }\n\n        /* minimum style to allow to style meter element */\n        meter {\n            -webkit-appearance: revert;\n            appearance: revert;\n        }\n\n        /* preformatted text - use only for this feature */\n        :where(pre) {\n            all: revert;\n        }\n\n        /* reset default text opacity of input placeholder */\n        ::placeholder {\n            color: unset;\n        }\n\n        /* remove default dot (•) sign */\n        ::marker {\n            content: initial;\n        }\n\n        /* fix the feature of 'hidden' attribute.\n           display:revert; revert to element instead of attribute */\n        :where([hidden]) {\n            display: none;\n        }\n\n        /* revert for bug in Chromium browsers\n           - fix for the content editable attribute will work properly.\n           - webkit-user-select: auto; added for Safari in case of using user-select:none on wrapper element */\n        :where([contenteditable]:not([contenteditable=\"false\"])) {\n            -moz-user-modify: read-write;\n            -webkit-user-modify: read-write;\n            overflow-wrap: break-word;\n            -webkit-line-break: after-white-space;\n            -webkit-user-select: auto;\n        }\n\n        /* apply back the draggable feature - exist only in Chromium and Safari */\n        :where([draggable=\"true\"]) {\n            -webkit-user-drag: element;\n        }\n\n        /* Revert Modal native behavior */\n        :where(dialog:modal) {\n            all: revert;\n        }\n    </style>\n</html>\n",
		error: ({ status, message }) => "<!doctype html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<title>" + message + "</title>\n\n\t\t<style>\n\t\t\tbody {\n\t\t\t\t--bg: white;\n\t\t\t\t--fg: #222;\n\t\t\t\t--divider: #ccc;\n\t\t\t\tbackground: var(--bg);\n\t\t\t\tcolor: var(--fg);\n\t\t\t\tfont-family:\n\t\t\t\t\tsystem-ui,\n\t\t\t\t\t-apple-system,\n\t\t\t\t\tBlinkMacSystemFont,\n\t\t\t\t\t'Segoe UI',\n\t\t\t\t\tRoboto,\n\t\t\t\t\tOxygen,\n\t\t\t\t\tUbuntu,\n\t\t\t\t\tCantarell,\n\t\t\t\t\t'Open Sans',\n\t\t\t\t\t'Helvetica Neue',\n\t\t\t\t\tsans-serif;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\theight: 100vh;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t.error {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tmax-width: 32rem;\n\t\t\t\tmargin: 0 1rem;\n\t\t\t}\n\n\t\t\t.status {\n\t\t\t\tfont-weight: 200;\n\t\t\t\tfont-size: 3rem;\n\t\t\t\tline-height: 1;\n\t\t\t\tposition: relative;\n\t\t\t\ttop: -0.05rem;\n\t\t\t}\n\n\t\t\t.message {\n\t\t\t\tborder-left: 1px solid var(--divider);\n\t\t\t\tpadding: 0 0 0 1rem;\n\t\t\t\tmargin: 0 0 0 1rem;\n\t\t\t\tmin-height: 2.5rem;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t.message h1 {\n\t\t\t\tfont-weight: 400;\n\t\t\t\tfont-size: 1em;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t@media (prefers-color-scheme: dark) {\n\t\t\t\tbody {\n\t\t\t\t\t--bg: #222;\n\t\t\t\t\t--fg: #ddd;\n\t\t\t\t\t--divider: #666;\n\t\t\t\t}\n\t\t\t}\n\t\t</style>\n\t</head>\n\t<body>\n\t\t<div class=\"error\">\n\t\t\t<span class=\"status\">" + status + "</span>\n\t\t\t<div class=\"message\">\n\t\t\t\t<h1>" + message + "</h1>\n\t\t\t</div>\n\t\t</div>\n\t</body>\n</html>\n"
	},
	version_hash: "1hvv2l4"
};

export async function get_hooks() {
	return {
		
		
	};
}

export { set_assets, set_building, set_manifest, set_prerendering, set_private_env, set_public_env, set_read_implementation, set_safe_public_env };
