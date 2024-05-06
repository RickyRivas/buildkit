import { error } from '@sveltejs/kit';
export async function load({ params }) {
    const requestedPost = params.post;

    try {
        const foundMDFile = await import(`../../../lib/blogposts/${ requestedPost }.md`)
        return {
            postData: foundMDFile.metadata,
            path: requestedPost,
            Content: foundMDFile.default
        }
    } catch (e) {
        throw error(404, {
            message: 'Post Not found'
        });
    }
}
