<script>
  // components
  import SEO from "./../lib/components/SEO.svelte"

  // stores
  import { business } from "$lib/config"
  import { onMount } from "svelte"
  import { browser } from "$app/environment"

  onMount(() => {
    // Netlify blog invite redirect
    if (location.href.indexOf("#invite_token") != -1) {
      var urlSplit = document.URL.split("#")
      window.location = `/admin/#${urlSplit[1]}`
    }
  })
</script>

<SEO
  title="{business.name} | {business.industry} | {business.cityAndState}"
  description={business.homepage.metaDescription}
  canonical={business.canonical}
  siteName={business.name}
  imageURL={business.ogImage}
  index={true}
  twitter={true}
  openGraph={true}
  schemaOrg={false}
  logo=""
  author=""
  name="" />
<svelte:head>
  <!-- <link rel="preload" as="image" href="/assets/images/slideshow/hero.jpg" media="(min-width: 768px)"
        fetchpriority="high"> -->
  <!-- <link
    rel="preload"
    as="video"
    type="video/mp4"
    media="(max-width: 1023px)"
    href="/assets/video/welcome-small.mp4"
    fetchpriority="high" />
  <link
    rel="preload"
    as="video"
    type="video/mp4"
    media="(min-width: 1024px)"
    href="/assets/video/welcome.mp4"
    fetchpriority="high" /> -->
</svelte:head>

<main>
  <section id="slideshow">
    <video
      id="welcomevid"
      class="welcomevid lazyload"
      preload="none"
      poster="/video/poster.jpg"
      autoplay
      loop
      muted
      playsinline>
      <!-- uncomment if video -->
      <!-- {#if browser && window.innerWidth > 1299}
        <source type="video/mp4" src="/video/welcome.mp4" />
      {:else if browser && window.innerWidth < 1299}
        <source type="video/mp4" src="/video/welcome-small.mp4" />
      {/if} -->
    </video>
    <div class="ssoverlay">
      <div class="slogan">onwards & upwards</div>
    </div>
  </section>
</main>
