const actions = {
  switchTheme: ({ url, cookies, locals }) => {
    const currentTheme = cookies.get("theme");
    let newTheme;
    const cookieProp = {
      path: "/",
      maxAge: 60 * 60 * 24 * 365
    };
    if (currentTheme === "light")
      cookies.set("theme", "dark", cookieProp), newTheme = "dark";
    else
      cookies.set("theme", "light", cookieProp), newTheme = "light";
    locals.theme = newTheme;
    return { success: true, newTheme };
  }
};
export {
  actions
};
