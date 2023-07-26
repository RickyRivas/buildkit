<script lang="ts">
  // components
  import SubNavigation from "$lib/components/SubNavigation.svelte"
  // stores
  import { page } from "$app/stores"
  // styles
  // logic
  let pageTitle = "Error"
</script>

<SubNavigation {pageTitle} />

<section>
  <div class="container">
    <span>Message:</span>
    <h2>{$page.status}: {$page?.error?.message}</h2>
    <a href="/" class="btn">Go Home</a>
  </div>
</section>

<style lang="less">
  section {
    padding: 3em 0;
  }
  .container {
    margin: 0 auto;
    width: 96%;
    max-width: 60em;

    h2 {
      font-size: 2em;
      margin-bottom: 0.5em;
    }

    a {
      background-color: #000;
      color: white;
      text-decoration: none;
      padding: 0.5em 1em;
      transition: background-color 0.33s ease;

      &:hover,
      &:focus-visible {
        background-color: var(--primary-color);
      }
    }
  }
</style>
