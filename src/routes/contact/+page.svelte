<script lang="ts">
  import { enhance } from "$app/forms"
  import { goto } from "$app/navigation"
  // components
  import SubNavigation from "$lib/components/SubNavigation.svelte"
  import InteriorLayout from "$lib/components/InteriorLayout.svelte"
  import AnchorButton from "$lib/components/AnchorButton.svelte"
  import Modal from "$lib/components/Modal.svelte"
  import LoadingStatus from "$lib/components/LoadingStatus.svelte"

  // stores
  import { business } from "$lib/config"
  import { page } from "$app/stores"
  import SEO from "$lib/components/SEO.svelte"

  // logic
  import { findPage } from "$lib/utils"
  let thisPage = findPage(business, $page.route.id)

  let form
  let showModal = false
  let loading = false
  let success = false
  let error = false
  let message = ""
  let inProd = false

  function clearModal() {
    // if (success) clearFields()
    message = ""
    showModal = false
    success = false
    loading = false
    error = false
  }

  function checkFileSize(input) {
    document.querySelector(`label[for=${input.name}]`)?.classList.remove("success")
    document.querySelector(`label[for=${input.name}]`)?.classList.remove("error")
    const maxSize = 4 * 1024 * 1024 // 8MB in bytes
    const files = input.element.files
    let totalSize = 0

    for (let i = 0; i < files.length; i++) {
      totalSize += files[i].size
    }

    if (totalSize > maxSize) {
      document.querySelector(`label[for=${input.name}]`).classList.add("error")
      document.querySelector(`label[for=${input.name}] .custom-file-upload`).textContent =
        "Maximum file size limit of 4mb reached. Try again."
      return
    }

    let combinedFileNames = ""

    for (let i = 0; i < files.length; i++) {
      totalSize += files[i].size
      combinedFileNames += files[i].name
      if (i < files.length - 1) {
        combinedFileNames += ", "
      }
    }

    // // manually update file name
    document.querySelector(`label[for=${input.name}]`)?.classList.add("success")
    document.querySelector(`label[for=${input.name}] .custom-file-upload`).textContent =
      combinedFileNames
  }

  let fileUploadInputs = [
    {
      id: "files",
      name: "files",
      label: "Supporting Files",
      type: "file",
      filename: "Please upload your supporting file (4mb max)",
      element: "",
      success: false,
    },
  ]
</script>

<!-- recaptha -->
<!-- <svelte:head>
  <script>
    function verifyCallback() {
      document.querySelector("#contact-form button").removeAttribute("disabled")
    }

    function onloadCallback() {
      setTimeout(() => {
        widget = grecaptcha.render("g-recaptcha", {
          sitekey: "6LcaphYnAAAAAPTZw-Grz-TOIqPu51NYZ4d17qEd",
          callback: verifyCallback,
        })
      }, 500)
    }
  </script>

  <script
    src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit"
    async
    defer></script>
</svelte:head> -->

<SEO
  title={thisPage?.title}
  description={thisPage?.description}
  imageURL={thisPage?.imageURL}
  canonical={$page.url.href}
  siteName={business.name}
  index={true}
  twitter={true}
  openGraph={true}
  schemaOrg={false}
  logo=""
  author=""
  name="" />
<SubNavigation pageTitle={thisPage?.title} pagePath={thisPage.path} pageName={thisPage.name} />

<InteriorLayout bind:thisPage>
  <h2>Get in touch.</h2>
  <p>
    Let us know if you have any questions or would like to talk about a potential project. We
    respond to every call or email we get!
  </p>
  <form
    bind:this={form}
    id="contact-form"
    method="post"
    name="contact"
    action="/"
    enctype="multipart/form-data"
    use:enhance={async ({ cancel }) => {
      showModal = true
      loading = true
      // form on this page must match fields on static html form.
      // Yes. 2 forms. but atleast it works when this page is SSRD!
      // input names must match on each form fields
      const formData = new FormData(form)

      // google recaptcha is also included in the form data. remove.
      formData.delete("g-recaptcha-response")
      const response = await fetch("/contactform.html", {
        method: "POST",
        body: formData,
      })

      // TODO: custom form success page
      if (response.ok) {
        message = "We have received your submission. Thank you."
        loading = false
        success = true
        setTimeout(() => {
          goto("/")
        }, 3000)
      }
      cancel()
    }}>
    <input type="hidden" name="form-name" value="contact" />
    <div class="form-control">
      <label for="fname">Name</label>
      <input id="fname" type="text" name="Name" placeholder="Name" required />
    </div>

    <div class="form-control">
      <label for="subject" class="dropdown">Subject:</label>
      <select id="subject" name="Subject" form="contact-form">
        <option value="" disabled selected>Please select an option</option>
        <option value="Complaint">Complaint</option>
        <option value="Compliment">Compliment</option>
        <option value="Suggestion">Suggestion</option>
        <option value="Question">Question</option>
      </select>
    </div>

    <div class="form-control">
      <label for="email-input">Email</label>
      <input id="email-input" type="email" name="Email" placeholder="Email" required />
    </div>

    <div class="form-control">
      <label for="phone-input">Phone Number</label>
      <input id="phone-input" type="number" name="Phone" placeholder="Phone" required="" />
    </div>

    <div class="form-control">
      <label for="message-input">How can we help?</label>
      <textarea
        id="message-input"
        name="Message"
        cols="20"
        rows="5"
        placeholder="Enter message..." />
    </div>

    <!-- Uncomment for file uploads -->
    <div class="form-controls-uploads">
      {#each fileUploadInputs as input}
        <!-- 1st file upload -->
        <div class="form-control">
          <label for={input.name} class={input.success ? "success" : ""}>
            <div class="icon">
              <svg
                aria-hidden="true"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                width="76"
                height="71"
                fill="none"
                viewBox="0 0 76 71">
                <path fill="#1A1918" d="M.149 62.707h75v7.759h-75v-7.759Z" />
                <path
                  fill="#1A1918"
                  d="M33.77 54.954V14.83L15.748 31.905l-5.338-5.632L37.649.473l27.237 25.8-5.337 5.632-18.021-17.074v40.123h-7.759Z" />
              </svg>
            </div>
            <span class="custom-file-upload">
              {input.filename}
            </span>
          </label>
          <input
            class="screenreader"
            name={input.name}
            type="file"
            id={input.id}
            bind:this={input.element}
            on:change={() => {
              checkFileSize(input)
            }}
            required
            accept="image/*,.pdf,.doc,.docx,.xls,.xlsx" />
        </div>
      {/each}
    </div>
    <!-- recaptcha -->
    <!-- <div class="g-recaptcha" style="margin-bottom: 1em;" id="g-recaptcha" data-sitekey="" /> -->
    <AnchorButton text="Submit" formButton={true} disabled={true} />
    <!-- -->
  </form>
</InteriorLayout>

{#if showModal}
  <Modal
    disable={loading ? true : false}
    on:escape={() => {
      clearModal()
    }}>
    <div class="subscribe-page-modal">
      <LoadingStatus bind:loading bind:success bind:error />
      {#if loading}
        <p>Loading...</p>
      {/if}
      {#if success}
        <!-- successfully added to db -->
        <p>{message}</p>
      {:else if error}
        <!-- failed to be added to db -->
        <p>{message}</p>
      {/if}
    </div>
  </Modal>
{/if}
