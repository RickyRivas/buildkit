<script>
  import SidebarSubscribe from "$lib/components/SidebarSubscribe.svelte"
  import SubFooter from "./SubFooter.svelte"
  export let thisPage
</script>

<main>
  <section
    class="interior-page {!thisPage.sidebar ? 'full-width' : ''}
      {thisPage.sidebar && thisPage.sidebarComponent === 'subscribe'
      ? 'subscribe-layout'
      : 'img-layout'}">
    <div class="container">
      <div id="content">
        <slot></slot>
      </div>
      <!-- Sidebar interior -->
      {#if thisPage.sidebar && thisPage.sidebarComponent === "subscribe"}
        <SidebarSubscribe />
      {:else if thisPage.sidebar && thisPage.sidebarComponent !== "subscribe"}
        <img
          class="sidebar-img"
          src="/sidebar.jpg"
          alt="sidebar"
          width="522"
          height="540"
          loading="lazy"
          fetchpriority="high" />
      {/if}
    </div>
  </section>
  {#if !thisPage.hideBottomCTA}
    <SubFooter />
  {/if}
</main>
