<script lang="ts">
  // components
  import SubNavigation from "$lib/components/SubNavigation.svelte"

  // stores
  import { business } from "$lib/config"
  import { page } from "$app/stores"
  import SEO from "$lib/components/SEO.svelte"

  // logic
  const thisPage = business.interiorPages.find((p) => p.path === $page.route.id)
</script>

<SEO
  title={thisPage?.title}
  description={thisPage?.description}
  imageURL={thisPage?.imageURL}
  canonical={$page.url.href}
  siteName={business.name}
  index={true}
  twitter={true}
  openGraph={true}
  schemaOrg={false}
  logo=""
  author=""
  name="" />
<SubNavigation pageTitle={thisPage?.title} />

<main>
  <h1>services</h1>
</main>
