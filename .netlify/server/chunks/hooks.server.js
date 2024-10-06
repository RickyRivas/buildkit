async function handle({ event, resolve }) {
  let theme = event.cookies.get("theme");
  if (theme !== "light" && theme !== "dark")
    theme = "light", event.cookies.set("theme", theme, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365
    });
  event.locals.theme = theme;
  const response = await resolve(event, {
    transformPageChunk: ({ html }) => {
      return html.replace('data-theme=""', `data-theme="${theme}"`);
    }
  });
  return response;
}
export {
  handle
};
