<script>
  import { business } from "$lib/config"
  import GoogleIcon from "$lib/icons/GoogleIcon.svelte"
  import FacebookIcon from "$lib/icons/FacebookIcon.svelte"
  import InstagramIcon from "$lib/icons/InstagramIcon.svelte"
  import YoutubeIcon from "$lib/icons/YoutubeIcon.svelte"
  import XIcon from "$lib/icons/XIcon.svelte"
</script>

<div class="socialmedia">
  {#if business.socials.facebook}
    <a class="facebook" aria-label="follow us on facebook" href={business.socials.facebook}>
      <FacebookIcon />
    </a>
  {/if}
  {#if business.socials.google}
    <a class="google" aria-label="review us on google" href={business.socials.google}>
      <GoogleIcon />
    </a>
  {/if}
  {#if business.socials.youtube}
    <a
      class="youtube"
      aria-label="subscribe to our youtube channel"
      href={business.socials.youtube}>
      <YoutubeIcon />
    </a>
  {/if}
  {#if business.socials.xTwitter}
    <a class="x-twitter" aria-label="follow us on ex" href={business.socials.xTwitter}>
      <XIcon />
    </a>
  {/if}
  {#if business.socials.instagram}
    <a class="instagram" aria-label="follow us on instagram" href={business.socials.instagram}>
      <InstagramIcon />
    </a>
  {/if}
</div>
