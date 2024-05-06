import { json } from "@sveltejs/kit";
import { fetchMarkdownPosts } from '$lib/utils'

export const GET = async () => {
    const posts = await fetchMarkdownPosts()
    const sortedPosts = posts.sort((a, b) => {
        return new Date(b.meta.date) - new Date(a.meta.date)
    })
    return json(sortedPosts)
}