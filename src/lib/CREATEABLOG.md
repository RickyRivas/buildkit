# Steps to build a blog
1. Set 'includeBlog' key to true in buildkit config for set styles & include in nav/footer
2. Enable netlify identity
3. Enable Git Gateway
4. close registration to invite only & invite users (myself and client)
5. Open signup email link and click 'Accept'
6. This will open a new link to the website with a token in the url params.  before the token in the url, enter /admin (url/admin/#invite_token=) and it should take you to complete signup.

notes:
// Before any edits to site, fetch blog data
// if a post is renamed, the old name will still be used in the URL (TODO!)