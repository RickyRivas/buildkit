export const business = {
    canonical: 'https://site.com',
    name: 'Rivas Web Designs',
    cityAndState: 'Tulsa, Ok',
    industry: 'Web Design',
    ogImage: '',
    phone: '(918) 123-4567',
    address: '1234 East Tulsa, Ok 12345',
    email: 'biz@email.com',
    // Set to true if client opts for blog
    includeBlog: true,
    homepage: {
        metaDescription: "This is the homepage description",
    },
    interiorPages: [
        {
            name: "About",
            path: "/about",
            title: "About Page",
            description: "About Page Description",
            imageURL: ""
        },
        {
            name: "services",
            path: "/services",
            title: "Services Page",
            description: "Services Page Description",
            imageURL: ""
        },
        {
            name: "Faq",
            path: "/faq",
            title: "FAQ Page",
            description: "FAQ Page Description",
            imageURL: ""
        },
        {
            name: "Contact",
            path: "/contact",
            title: "Contact Page",
            description: "Contact Page Description",
            imageURL: ""
        },
    ],
    businessHours: {
        monday: '8:00am to 5:00pm',
        tuesday: '8:00am to 5:00pm',
        wednesday: '8:00am to 5:00pm',
        thursday: '8:00am to 5:00pm',
        friday: '8:00am to 5:00pm',
        saturday: 'Closed',
        sunday: 'Closed',
    },
    socials: {
        facebook: '/',
        instagram: '/',
        xTwitter: '/',
        youtube: '/',
        google: '/'
    }
}