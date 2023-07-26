<script>
  // components

  // stores
  import { URL, companyName, industry, cityAndState, pages, services } from "$lib/config"
  import { page } from "$app/stores"
  // styles
  import "$styles/home.less"

  // logic
  const thisPage = pages.find((p) => p.path === $page.route.id)
</script>

<svelte:head>
  <!-- preload hero imgs -->
  <!-- <link rel="preload" as="image" href="/heromobile.webp" />
  <link rel="preload" as="image" href="/hero.webp" /> -->
  <meta property="og:title" content="" />
  <link rel="canonical" href={URL} />
  <meta property="og:url" content={URL} />
  <meta name="description" content={thisPage?.metaDescription} />
  <meta property="og:description" content={thisPage?.metaDescription} />
  <title>{companyName} | {industry} | {cityAndState}</title>
</svelte:head>

<section id="landing">
  <div class="content">
    <span>Made with Sveltekit</span>
    <h1>Web development,<br /> streamlined</h1>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates adipisci et magni
      laborum, voluptatibus omnis soluta numquam neque eaque inventore.
    </p>
    <a href="/" class="cta">Read the docs</a>
  </div>
  <img class="hero" src="/img01.jpg" alt="laptop" width="500" height="610" decoding="async" />
</section>
