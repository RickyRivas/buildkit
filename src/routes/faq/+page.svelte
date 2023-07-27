<script lang="ts">
  // components
  import SubNavigation from "$lib/components/SubNavigation.svelte"

  // stores
  import { URL, companyName, industry, cityAndState, pages } from "$lib/config"
  import { page } from "$app/stores"
  // styles

  // logic
  const thisPage = pages.find((p) => p.path === $page.route.id)
  const pageTitle = $page.route.id?.slice(1)
</script>

<svelte:head>
  <link rel="canonical" href={URL + $page.route.id} />
  <meta name="description" content={thisPage?.metaDescription} />
  <meta property="og:description" content={thisPage?.metaDescription} />
  <title>{companyName} | {thisPage?.name} | {cityAndState}</title>
</svelte:head>

<SubNavigation {pageTitle} />
<h1>FAq</h1>
