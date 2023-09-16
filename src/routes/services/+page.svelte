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
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Business Name" />
  <meta property="og:title" content="" />
  <meta property="og:url" content={$page.url.href} />
  <meta name="description" content={thisPage?.metaDescription} />
  <meta property="og:description" content={thisPage?.metaDescription} />
  <link rel="canonical" href={$page.url.href} />
  <meta property="og:image" content="" />
  <meta property="og:image:secure_url" content="" />
  <meta property="og:url" content="" />
  <!-- <meta property="article:published_time" content="" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="" />
  <meta name="twitter:description" content="" />
  <meta name="twitter:site" content="" />
  <meta name="twitter:creator" content="" />
  <meta name="twitter:image" content="" />
  <meta name="twitter:label1" content="" />
  <meta name="twitter:data1" content="" />
  <meta name="twitter:label2" content="" />
  <meta name="twitter:data2" content="" /> -->
  <title>{companyName} | {thisPage?.name} | {cityAndState}</title>
</svelte:head>

<SubNavigation {pageTitle} />
<h1>services</h1>
