import { g as getContext } from "./ssr.js";
import "./exports.js";
import "devalue";
const business = {
  canonical: "https://site.com",
  name: "Rivas Web Designs",
  cityAndState: "Tulsa, Ok",
  industry: "Web Design",
  ogImage: "",
  phone: "(918) 123-4567",
  address: "1234 East Tulsa, Ok 12345",
  email: "biz@email.com",
  homepage: {
    metaDescription: "This is the homepage description"
  },
  interiorPages: [
    {
      name: "Documents",
      subPages: [
        {
          name: "Documents",
          path: "/documents",
          title: "All Documents",
          description: "",
          imageURL: "",
          sidebar: true
        },
        {
          name: "Sub Documents",
          path: "/subdocuments",
          title: "All Sub Documents",
          description: "",
          imageURL: "",
          sidebar: true
        }
      ]
    },
    {
      name: "faq",
      path: "/faq",
      title: "Frequently Asked Questions",
      description: "",
      imageURL: "",
      sidebar: true,
      sidebarComponent: "subscribex"
    },
    {
      name: "About",
      path: "/about",
      title: "About Us",
      description: "",
      imageURL: "",
      sidebar: true
    },
    {
      name: "Services",
      path: "/services",
      title: "Our Services",
      description: "",
      imageURL: "",
      sidebar: true
    },
    {
      name: "Contact",
      path: "/contact",
      title: "Contact Us",
      description: "Contact Page Description",
      imageURL: "",
      sidebar: true
    },
    // if client opts for blog
    {
      name: "Blog",
      path: "/blog",
      title: "Our Blog",
      description: "Blog Page Description",
      imageURL: "",
      sidebar: true
    }
  ],
  businessHours: {
    monday: "8:00am to 5:00pm",
    tuesday: "8:00am to 5:00pm",
    wednesday: "8:00am to 5:00pm",
    thursday: "8:00am to 5:00pm",
    friday: "8:00am to 5:00pm",
    saturday: "Closed",
    sunday: "Closed"
  },
  socials: {
    facebook: "/",
    instagram: "/",
    xTwitter: "/",
    youtube: "/",
    google: "/"
  }
};
function get(key, parse = JSON.parse) {
  try {
    return parse(sessionStorage[key]);
  } catch {
  }
}
const SNAPSHOT_KEY = "sveltekit:snapshot";
const SCROLL_KEY = "sveltekit:scroll";
get(SCROLL_KEY) ?? {};
get(SNAPSHOT_KEY) ?? {};
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
export {
  business as b,
  page as p
};
