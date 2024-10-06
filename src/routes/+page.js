// works only on client side
export const load = async () => {
    // fetching 'about us' section content
    const homeContentFile = import.meta.glob('/src/lib/cms/homecontent.md', { eager: true });
    const Content = homeContentFile[ '/src/lib/cms/homecontent.md' ].default
    return {
        Content
    }
}