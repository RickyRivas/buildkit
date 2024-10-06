<script lang="ts">
  // components
  import SubNavigation from "$lib/components/SubNavigation.svelte"
  import InteriorLayout from "$lib/components/InteriorLayout.svelte"

  // stores
  import { business } from "$lib/config"
  import { page } from "$app/stores"
  import SEO from "$lib/components/SEO.svelte"

  // logic
  import { findPage } from "$lib/utils"
  let thisPage = findPage(business, $page.route.id)
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

<SubNavigation pageTitle={thisPage?.title} pagePath={thisPage.path} pageName={thisPage.name} />

<InteriorLayout bind:thisPage>
  <h1>{thisPage.title}</h1>
</InteriorLayout>
