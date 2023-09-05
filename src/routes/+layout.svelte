<script>
  import "$styles/global.less"
  import Navigation from "$lib/components/Navigation.svelte"
  import Footer from "$lib/components/Footer.svelte"
  import ToTop from "$lib/components/ToTop.svelte"
</script>

<Navigation />
<main>
  <slot />
</main>

<Footer />
<ToTop />
