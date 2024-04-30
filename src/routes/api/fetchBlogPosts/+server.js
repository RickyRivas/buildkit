import { json } from "@sveltejs/kit";

const fetchMarkdownPosts = async () => {
    // grabbing mds from our lib folder
    const allPostFiles = import.meta.glob('/src/lib/blogposts/*.md');
    const iterablePostFiles = Object.entries(allPostFiles);
    const allPosts = await Promise.all(
        iterablePostFiles.map(async ([ path, resolver ]) => {
            const { metadata } = await resolver();
            const postPath = path.slice(11, -3);

            return {
                metadata,
                postPath
            };
        })
    );

    console.log(allPosts)
    return allPosts;
};

export const GET = async () => {
    const allPosts = await fetchMarkdownPosts()
    const sortedPosts = allPosts.sort((a, b) => {
        return new Date(b.meta.date) - new Date(a.meta.date)
    })

    return json(sortedPosts)
}