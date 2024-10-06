<script>
  // Review CREATEABLOG.md for blog implementation
  // Components
  import SubNavigation from "$lib/components/SubNavigation.svelte"
  import InteriorLayout from "$lib/components/InteriorLayout.svelte"
  import SEO from "$lib/components/SEO.svelte"
  import { formatDate } from "$lib/utils"

  // logic
  import { business } from "$lib/config"
  import { page } from "$app/stores"
  export let data
  const { posts } = data

  // mark most recent post
  if (posts[0]) posts[0].postData.latest = true

  // logic
  import { findPage } from "$lib/utils"
  let thisPage = findPage(business, $page.route.id)
</script>

<SEO
  title="Our Blog"
  description="Welcome to the blog of {business.name}"
  canonical={`${business.canonical}/blog`}
  siteName={business.name}
  imageURL={business.ogImage}
  index={true}
  twitter={true}
  openGraph={true}
  schemaOrg={false}
  logo=""
  author=""
  name="" />
<SubNavigation pageTitle={thisPage?.title} pagePath={thisPage.path} pageName={thisPage.name} />
<InteriorLayout bind:thisPage>
  <section id="blog-posts">
    {#if posts.length === 0}
      <h2>No available posts.</h2>
    {:else}
      <h2>Our recent posts</h2>
      <div class="posts">
        {#each posts as { postData, path }}
          <article class="post {postData.latest ? 'latest' : ''}">
            <div class="thumbnail">
              <img src={postData.thumbnail} alt={postData.imageAlt} decoding="async" />
            </div>
            <div class="tags">
              <span>Tags:</span>
              {#each postData.tags as tag}
                <span>{tag}</span>
              {/each}
            </div>
            <h3>
              <a href={"blog/" + path.replace(".md", "")}>{postData.title}</a>
            </h3>
            <p class="description">{postData.description.substring(0, 80) + "..."}</p>
            <p class="author">Written by {postData.author}</p>
            <p class="date">{formatDate(postData.date)}</p>
          </article>
        {/each}
      </div>
    {/if}
  </section>
</InteriorLayout>
