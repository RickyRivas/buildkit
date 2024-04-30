<script>
  // stores
  import { business } from "$lib/config"
  import { page } from "$app/stores"
  import Logo from "$lib/Logo.svelte"
  import SocialMedia from "./SocialMedia.svelte"
</script>

<footer>
  <div class="container">
    <div class="item">
      <a href="/" class="logo">
        <Logo />
        <p class="slogan">
          INK Bros is Tulsa's choice for custom apparel services, specializing in top-notch screen
          printing, embroidery, and more to bring your unique designs to life.
        </p>
      </a>
    </div>
    <div class="wrap">
      <!-- Divider -->
      <div class="item">
        <h2>Sitemap</h2>
        <ul>
          <!-- pages controled by site config-->
          {#each business.interiorPages as { name, path }}
            <li class="link">
              <a href={path} class:active={$page.url.pathname === path}>{name}</a>
            </li>
          {/each}
        </ul>
      </div>
      <!-- Divider -->
      <div class="item">
        <h2>Services</h2>
        <ul>
          <li>
            <a href="/services">Service Item</a>
          </li>
          <li>
            <a href="/services">Service Item</a>
          </li>
          <li>
            <a href="/services">Service Item</a>
          </li>
          <li>
            <a href="/services">Service Item</a>
          </li>
          <li>
            <a href="/services">Service Item</a>
          </li>
        </ul>
      </div>
      <!-- Divider -->
      <div class="item">
        <h2>Contact</h2>
        <ul>
          <li>
            <a class="mail" href="mailto:{business.email}">Email: {business.email}</a>
          </li>
          <li>
            <a
              href="tel:{business.phone
                .replace('(', '')
                .replace(')', '')
                .replace('-', '')
                .replace(' ', '')}">
              <span>Phone: </span>{business.phone}</a>
          </li>
          <li>
            <SocialMedia />
          </li>
        </ul>
      </div>
    </div>
  </div>

  <p class="credit">
    Custom Coded & Designed by <a href="https://www.rivaswebdesigns.com/" target="_blank"
      >Rivas Web Designs</a>
    | {business.name} ©2023
  </p>
</footer>
