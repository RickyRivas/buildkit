import { error } from '@sveltejs/kit';
export async function load({ params }) {

    const mdFilesPath = '../../../lib/blogposts/'
    const requestedPost = params.post;
    let foundMDFile;

    try {
        foundMDFile = await import(`${ mdFilesPath }${ requestedPost }.md`)
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
