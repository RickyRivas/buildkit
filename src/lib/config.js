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
            name: "News",
            path: "/newsletter",
            title: "Our Newsletter",
            description: "",
            imageURL: "",
            sidebar: true,
            sidebarComponent: 'subscribex'
        },
        {
            name: "Documents",
            subPages: [
                {
                    name: "Documents",
                    path: "/documents",
                    title: "All Documents",
                    description: "",
                    imageURL: "",
                    sidebar: true,
                },
                {
                    name: "ARC Form",
                    path: "/arc",
                    title: "ARC Form",
                    description: "",
                    imageURL: "",
                    sidebar: true,
                    sidebarComponent: 'subscribex'
                },
                {
                    name: "By Laws",
                    path: "/docs/BY-LAWS.PDF",
                    title: "By Laws",
                },
                {
                    name: "Covenants",
                    path: "/docs/COVENANTS.PDF",
                    title: "Covenants",
                },
                {
                    name: "Oxford Park I",
                    path: "/docs/Oxford-Park-Plat-and-DD.pdf",
                    title: "Oxford Park I",
                },
                {
                    name: "Oxford Park II",
                    path: "/docs/Oxford-Park-II-division.pdf",
                    title: "Oxford Park II",
                }
            ]
        },
        {
            name: "Events",
            path: "/events",
            title: "Upcoming Activities & Events",
            description: "",
            imageURL: "",
            sidebar: true,
            sidebarComponent: 'subscribex'
        },
        {
            name: "Reservations",
            path: "/reservations",
            title: "Make a reservation",
            description: "",
            imageURL: "",
            sidebar: true
        },
        {
            name: "About",
            path: "/about",
            title: "About Us",
            description: "",
            imageURL: "",
            sidebar: false
        },
        {
            name: "Resources",
            subPages: [
                {
                    name: "Helpful Links",
                    path: "/helpful-links",
                    title: "Helpful Links",
                    description: "",
                    imageURL: "",
                    sidebar: true
                },
                {
                    name: "Preferred Business",
                    path: "/preferred-business",
                    title: "Preferred Business",
                    description: "",
                    imageURL: "",
                    sidebar: true
                },
                {
                    name: "Subscribe",
                    path: "/subscribe",
                    title: "Subscribe",
                    description: "",
                    imageURL: "",
                    sidebar: true,
                    hideBottomCTA: true
                },
            ]
        },
        {
            name: "Contact",
            path: "/contact",
            title: "Contact Us",
            description: "Contact Page Description",
            imageURL: "",
            sidebar: true
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