import { json } from "@sveltejs/kit";
import { fetchMarkdownPosts } from '$lib/utils'

export const GET = async () => {
    const posts = await fetchMarkdownPosts()

    return json(posts)
}