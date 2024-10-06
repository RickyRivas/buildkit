<script lang="ts">
  import { enhance } from "$app/forms"
  import { goto } from "$app/navigation"
  // components
  import SubNavigation from "$lib/components/SubNavigation.svelte"
  import InteriorLayout from "$lib/components/InteriorLayout.svelte"
  import AnchorButton from "$lib/components/AnchorButton.svelte"

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
  let inProd = true

  function clearModal() {
    if (success) clearFields()
    message = ""
    showModal = false
    success = false
    loading = false
    error = false
  }
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
    id="contact-form"
    method="post"
    name="contact"
    use:enhance={async ({ cancel }) => {
      showModal = true
      loading = true
      // form on this page must match fields on static html form.
      // Yes. 2 forms. but atleast it works when this page is SSRD!
      // input names must match on each form fields
      const formData = new FormData(form)
      // google recaptcha is also included in the form data. remove.
      formData.delete("g-recaptcha-response")
      let formattedForUrl = new URLSearchParams(formData).toString()
      const response = await fetch("/contactform.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formattedForUrl,
      })

      // TODO: custom form success page
      if (response.ok) {
        message = "We have received your submission. Thank you."
        loading = false
        success = true
        setTimeout(() => {
          goto("/")
        }, 5000)
      }
      console.log(response)
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
    <!-- <div class="form-control">
        <label for="design-upload">Upload your design:</label>
        <input
          name="file"
          type="file"
          bind:this={fileUploadInput}
          on:change={checkFileSize}
          accept="image/*" />
      </div> -->
    <!-- recaptcha -->
    <!-- <div class="g-recaptcha" style="margin-bottom: 1em;" id="g-recaptcha" data-sitekey="" /> -->
    <AnchorButton text="Submit" formButton={true} disabled={true} />
    <!-- -->
  </form>
</InteriorLayout>
