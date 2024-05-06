<script lang="ts">
  import { business } from "$lib/config"
  import { page } from "$app/stores"
  import Logo from "$lib/Logo.svelte"

  let isActive = false

  function toggleNav() {
    isActive = !isActive
  }

  // add class to header when user scrolls 100px
  let y: any
</script>

<svelte:window bind:scrollY={y} />

<nav class:active={isActive} class={y >= 100 ? "scroll" : ""}>
  <div class="container">
    <!-- Logo -->
    <a href="/" class="logo">
      <Logo />
    </a>

    <!-- Nav links -->
    <ul class="nav-links" class:active={isActive}>
      <li class="nav-link" class:active={$page.url.pathname === "/"}>
        <a href="/" on:click={toggleNav}>home</a>
      </li>
      {#each business.interiorPages as { name, path }}
        <li class="nav-link" class:active={$page.url.pathname.startsWith(path)}>
          <a href={path} on:click={toggleNav}>{name}</a>
        </li>
      {/each}
      {#if business.includeBlog}
        <li
          class="nav-link"
          class:active={$page.url.pathname === "/blog" || $page.url.pathname.startsWith("/blog")}>
          <a href="/blog" on:click={toggleNav}>Blog</a>
        </li>
      {/if}
      <li class="">
        <a href="/contact" class="btn" on:click={toggleNav}>Contact Us</a>
      </li>
    </ul>

    <!-- Toggle -->
    <button class="toggle" aria-label="Toggle" class:active={isActive} on:click={toggleNav}>
      <span />
      <span />
      <span />
    </button>
  </div>
</nav>
