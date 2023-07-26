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
<div class="fixed">
  <button class={y >= 100 ? "show" : "hide"} on:click={scrollToTop}>
    <svg width="25" height="17" viewBox="0 0 25 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.5 0.907227L0 13.4072L2.94795 16.3551L12.5 6.80303L22.0521 16.3551L25 13.4072L12.5 0.907227Z"
        fill="currentcolor" />
    </svg>
    <span class="screenreader">Back to top</span>
  </button>
</div>

<style lang="less">
  .fixed {
    position: fixed;
    bottom: 1em;
    right: 1em;
    display: flex;
    flex-direction: column;
    z-index: 500;
    button {
      font: inherit;
      border: 0;
      background: var(--primary-color);
      width: (40/20em);
      height: (40/20em);
      display: flex;
      justify-content: center;
      align-items: center;
      transition: color 0.33s ease, background-color 0.33s ease, opacity 0.33s ease;
      border-radius: (4/20em);
      color: #212121;
      opacity: 1;
      svg {
        width: (25/20em);
        height: auto;
        display: block;
      }
      &:hover {
        color: #fff;
        background-color: var(--secondary-color);
      }
      &.hide {
        opacity: 0;
      }
    }
  }
</style>
