<script>
  // stores
  import { business } from "$lib/config"
  import { page } from "$app/stores"
  import Logo from "$lib/Logo.svelte"
  import SocialMedia from "./SocialMedia.svelte"

  let activeTopLevelWithSubpages

  $: if ($page.url.pathname) {
    const currentPath = $page.url.pathname

    // Check if current page is a top-level page
    const isTopLevel = business.interiorPages.some((page) => page.path === currentPath)

    if (isTopLevel) {
      activeTopLevelWithSubpages = null
    } else {
      // Find the group containing the current subpage
      activeTopLevelWithSubpages =
        business.interiorPages
          .find((group) => group.subPages?.some((subpage) => subpage.path === currentPath))
          ?.name.toLowerCase() ?? null
    }
  }
</script>

<footer>
  <div class="container">
    <a href="/" class="logo">
      <Logo />
    </a>

    <div class="mod">
      <!-- Divider -->
      <div class="item">
        <h2 class="title">Sitemap</h2>
        <ul class="ft-sitemap">
          <!-- pages controled by site config-->
          <li class="link">
            <a href="/" class:active={$page.url.pathname === "/"}>Home</a>
          </li>

          {#each business.interiorPages as { name, path, subPages }}
            <li
              class="link"
              class:active={$page.url.pathname.startsWith(path) ||
                name.toLowerCase().replace(" ", "-").replace("-& ", "-") ===
                  activeTopLevelWithSubpages}>
              {#if subPages}
                <a href={subPages[0].path}>
                  {name}
                </a>
              {:else}
                <a href={path}>{name}</a>
              {/if}
            </li>
          {/each}
        </ul>
      </div>
      <!-- Divider -->
      <div class="item">
        <h2 class="title">Contact Info</h2>
        <ul>
          <SocialMedia />
        </ul>
      </div>
    </div>
  </div>
  <div class="credit">
    <span>
      <span>
        Custom Coded & Designed by
        <a href="https://www.rivaswebdesigns.com/" target="_blank"> Rivas Web Designs</a>
      </span>
      <span class="divider">|</span>
      <span>
        {business.name} &#169; {new Date().getFullYear()}
      </span>
    </span>
  </div>
</footer>
