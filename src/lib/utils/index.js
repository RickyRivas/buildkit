export function formatDate(date) {
    return new Date(date).toLocaleDateString("en-us", {
        year: "numeric",
        month: "long",
        day: "numeric",
    })
}

export const fetchMarkdownPosts = async () => {
    // grabbing mds from our lib folder
    const blogPostsPath = '/src/lib/blogposts/'
    const blogMarkdownFiles = import.meta.glob('/src/lib/blogposts/*.md');
    const files = Object.entries(blogMarkdownFiles);

    const posts = await Promise.all(
        files.map(async ([ postpath, resolver ]) => {
            const { metadata: postData } = await resolver();
            const path = postpath.split(blogPostsPath)[ 1 ];

            return {
                postData,
                path
            };
        })
    );
    // most recent to least recent
    return posts.sort((a, b) => Date.parse(b.postData.date) - Date.parse(a.postData.date))
};