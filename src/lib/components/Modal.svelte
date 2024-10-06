<script lang="ts">
  import { createEventDispatcher, onMount } from "svelte"
  let modal, modalContainer
  export let custom = false
  export let disable = false
  import { fade } from "svelte/transition"

  // defs
  const _focusableElementsSelector =
    'a[href],area[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),button:not([disabled]),iframe,object,embed,[contenteditable],[tabindex]:not([tabindex^="-"])'

  // funcs
  function keydown(e) {
    const pressedKey = e.keyCode
    if (pressedKey === 27) endmodal()
    else if (pressedKey === 9) handleTabKey(e)
  }

  function handleTabKey(e) {
    // get all focusable elements in modal and when tabbed, focus on the next element
    let focusableElements = [...modal.querySelectorAll(_focusableElementsSelector)]
    let focusedIndex = focusableElements.indexOf(document.activeElement)

    if (e.shiftKey && focusedIndex <= 0) {
      focusableElements[focusableElements.length - 1].focus()
      e.preventDefault()
    } else if (!e.shiftKey && focusedIndex === focusableElements.length - 1) {
      focusableElements[0].focus()
      e.preventDefault()
    }
  }

  const dispatch = createEventDispatcher()
  function endmodal() {
    if (disable) return
    dispatch("escape")
  }

  // Init
  onMount(() => {
    // select first focusable element
    modal.focus()
  })
</script>

<!-- how to init -->
<!-- <button
    class="btn"
    on:click={() => {
      showModal = true
    }}>
    <span class="text">show modal</span>
    <BtnArrow />
  </button> -->

<!-- Example  -->
<!-- {#if showModal}
  <Modal
    on:escape={() => {
      showModal = false
    }}>
    <p>This is a modal</p>
    <input type="text" required="" name="name" id="input" />
    <input type="text" required="" name="name" id="input2" />
    <input type="text" required="" name="name" id="input3" />
  </Modal>
{/if} -->

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<div
  bind:this={modal}
  id="modal"
  role="dialog"
  aria-modal="true"
  aria-label="Dialog Window (Press escape to close)"
  tabindex="-1"
  aria-hidden="false"
  on:keydown={(e) => keydown(e)}
  transition:fade>
  <div class="modal-backdrop" on:click={(e) => endmodal(e)}></div>

  {#if custom}
    <slot></slot>
  {:else}
    <div class="modal" role="document" bind:this={modalContainer}>
      <slot></slot>
    </div>
  {/if}

  {#if !disable}
    <button
      id="close-modal"
      aria-label="Close (Press escape to close)"
      on:click={(e) => endmodal(e)}>
      <svg
        aria-hidden="true"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        fill="none"
        viewBox="0 0 25 25">
        <path
          fill="#D9D9D9"
          d="M25 1.382 23.618 0 12.5 11.118 1.382 0 0 1.382 11.118 12.5 0 23.618 1.382 25 12.5 13.882 23.618 25 25 23.618 13.882 12.5 25 1.382Z" />
      </svg>
    </button>
  {/if}
</div>
