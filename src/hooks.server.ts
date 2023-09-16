// import type { Handle } from "@sveltejs/kit"

// DARK MODE FUNC POSTPONED - Sep 16, 2023
// // server side render the correct color theme based on the cookie
// export const handle: Handle = async ({ event, resolve }) => {
//     let theme: string | null = null;

//     const newTheme = event.url.searchParams.get('theme')
//     const cookieTheme = event.cookies.get('colortheme')

//     if (newTheme) {
//         theme = newTheme;
//     } else if (cookieTheme) {
//         theme = cookieTheme
//     }

//     if (theme) {
//         return await resolve(event, {
//             transformPageChunk: ({ html }) =>
//                 html.replace('data-theme=""', `data-theme='${theme}'`),
//         })
//     }

//     return await resolve(event)
// }