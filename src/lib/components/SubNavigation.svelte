<script>
  import { browser } from "$app/environment"
  import { business } from "$lib/config"
  import { onMount } from "svelte"
  // components
  // stores
  // styles
  // logic
  // props
  export let pageTitle, pageName, pagePath

  let subnav
  onMount(() => {
    // subnav.style.backgroundImage = `url(/subnav0${Math.floor(Math.random() * 4) + 1}.jpg)`
  })
</script>

<section bind:this={subnav} id="subheader">
  <div class="container">
    <span class="subnav-subheading">{business.name}</span>
    <h1>{pageTitle}</h1>
    <div class="mod">
      <a class="prev-page" href="/">Home</a>
      <span class="line"></span>
      <a class="current-page" href={pagePath}>{pageName}</a>
    </div>
  </div>
</section>
