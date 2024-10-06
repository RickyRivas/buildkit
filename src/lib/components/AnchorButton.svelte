<script>
  export let formButton = false,
    disabled = false,
    link = "",
    text,
    screenreader = ""
</script>

{#if formButton}
  <button class="btn newbtn" {disabled}>
    <span class="text">{text}</span>
    <span class="screenreader">{screenreader}</span>
    <span class="arrow">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        viewBox="0 0 12 12"
        aria-hidden="true"
        role="img">
        <path
          fill="currentcolor"
          d="M11.92 5.62a1 1 0 0 0-.21-.33l-5-5a1.004 1.004 0 0 0-1.42 1.42L8.59 5H1a1 1 0 1 0 0 2h7.59l-3.3 3.29a.999.999 0 0 0 0 1.42 1 1 0 0 0 1.42 0l5-5a1 1 0 0 0 .21-.33 1 1 0 0 0 0-.76Z" />
      </svg>
    </span>
  </button>
{:else}
  <a href={link} class="btn newbtn">
    <span class="text">{text}</span>
    <span class="screenreader">{screenreader}</span>
    <span class="arrow">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        viewBox="0 0 12 12"
        aria-hidden="true"
        role="img">
        <path
          fill="currentcolor"
          d="M11.92 5.62a1 1 0 0 0-.21-.33l-5-5a1.004 1.004 0 0 0-1.42 1.42L8.59 5H1a1 1 0 1 0 0 2h7.59l-3.3 3.29a.999.999 0 0 0 0 1.42 1 1 0 0 0 1.42 0l5-5a1 1 0 0 0 .21-.33 1 1 0 0 0 0-.76Z" />
      </svg>
    </span>
  </a>
{/if}
