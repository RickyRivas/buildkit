import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["contactside.jpg","favicon.png","img01.jpg","og.jpg"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.03ab3a77.js","app":"_app/immutable/entry/app.840f2182.js","imports":["_app/immutable/entry/start.03ab3a77.js","_app/immutable/chunks/scheduler.e3a1d36e.js","_app/immutable/chunks/singletons.19a20642.js","_app/immutable/entry/app.840f2182.js","_app/immutable/chunks/scheduler.e3a1d36e.js","_app/immutable/chunks/index.adfe35ae.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js')),
			__memo(() => import('../server/nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/sitemap.xml",
				pattern: /^\/sitemap\.xml\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../server/entries/endpoints/sitemap.xml/_server.js'))
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})());
