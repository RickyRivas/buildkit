export async function handle({ event, resolve }) {
    // prerendered pages dont work so well with this
    let theme = event.cookies.get('theme');

    if (theme !== 'light' && theme !== 'dark') theme = 'light',
        event.cookies.set('theme', theme, {
            path: '/',
            maxAge: 60 * 60 * 24 * 365,
        })

    event.locals.theme = theme

    const response = await resolve(event, {
        transformPageChunk: ({ html }) => {
            return html
                .replace('data-theme=""', `data-theme="${ theme }"`)
            // .replace('<body class=""', `<body class="${ page }"`)
        }
    })

    return response
}