<script>
  // Review CREATEABLOG.md for blog implementation
  // Components
  import SubNavigation from "./../../lib/components/SubNavigation.svelte"
  import SEO from "./../../lib/components/SEO.svelte"

  export let data
  const { posts } = data

  console.log(posts)
</script>

<SEO title="Welcome to Our Blog" />
<SubNavigation pageTitle="Welcome to Our Blog" />

<main>
  <section>
    <div class="container">
      <h2>Our recent posts</h2>
    </div>
  </section>
</main>
