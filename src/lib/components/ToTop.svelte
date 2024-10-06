<script lang="ts">
  let y: any
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
</script>

<svelte:window bind:scrollY={y} />

<div id="btt" class={y >= 100 ? "show" : "hide"}>
  <button on:click={scrollToTop}>
    <div class="screenreader">click to go to top of page</div>
    <svg
      aria-hidden="true"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      fill="none"
      viewBox="0 0 50 50">
      <path
        fill="currentcolor"
        d="M25.5 17 13 29.5l2.948 2.948 9.552-9.552 9.552 9.552L38 29.5 25.5 17Z" />
    </svg>
  </button>
</div>
