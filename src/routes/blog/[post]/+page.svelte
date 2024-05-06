<script>
  // components
  import SEO from "$lib/components/SEO.svelte"
  import SubNavigation from "$lib/components/SubNavigation.svelte"

  // Logic
  import { business } from "$lib/config"
  export let data
  const { author, date, description, imageAlt, tags, thumbnail, title } = data.postData
  const { path, Content } = data
</script>

<SubNavigation pageTitle={title} />
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

<main>
  <section id="blog-post">
    <div class="container">
      <div id="content">
        <Content />
      </div>
    </div>
  </section>
</main>
