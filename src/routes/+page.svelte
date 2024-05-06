<script>
  // components
  import SEO from "./../lib/components/SEO.svelte"

  // stores
  import { business } from "$lib/config"
  import { onMount } from "svelte"

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

<main>
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
</main>
