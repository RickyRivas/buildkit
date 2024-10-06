<script>
  // components
  import SEO from "$lib/components/SEO.svelte"
  import SubNavigation from "$lib/components/SubNavigation.svelte"
  import InteriorLayout from "$lib/components/InteriorLayout.svelte"
  // Logic
  import { business } from "$lib/config"
  export let data
  const { author, date, description, imageAlt, tags, thumbnail, title } = data.postData
  const { path, Content } = data

  let thisPage = business.interiorPages.find((page) => page.path === "/blog")
</script>

<SubNavigation pageTitle={title} pagePath={path} pageName={title} />
<SEO
  {title}
  {description}
  {author}
  siteName={business.name}
  canonical={`${business.canonical}/${path}`}
  imageURL={thumbnail}
  index={true}
  twitter={true}
  openGraph={true}
  schemaOrg={false} />

<InteriorLayout bind:thisPage>
  <Content />
</InteriorLayout>
