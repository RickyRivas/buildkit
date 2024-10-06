<script lang="ts">
  // components
  import SubNavigation from "$lib/components/SubNavigation.svelte"
  import InteriorLayout from "$lib/components/InteriorLayout.svelte"

  // stores
  import { business } from "$lib/config"
  import { page } from "$app/stores"
  import SEO from "$lib/components/SEO.svelte"

  // logic
  import { findPage } from "$lib/utils"
  let thisPage = findPage(business, $page.route.id)

  // file size upload (If needed)
  // let fileUploadInput: any
  // function checkFileSize() {
  //   const file = fileUploadInput.files[0]
  //   const fileSize = file.size / 1024 / 1024

  //   if (fileSize > 8) {
  //     fileUploadInput.value = ""
  //     console.log("Large file!", fileSize)
  //   } else {
  //     // Upload the file
  //   }
  // }
</script>

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
  <form id="contact-form" method="post" name="contact" netlify="true" enctype="multipart/form-data">
    <input type="hidden" name="form-name" value="contact" />
    <div class="form-control">
      <label for="fname">Name</label>
      <input id="fname" type="text" name="Client Name" placeholder="John Doe" required />
    </div>
    <div class="form-control">
      <label for="email-input">Email</label>
      <input id="email-input" type="email" name="Email" placeholder="you@email.com" required />
    </div>
    <div class="form-control">
      <label for="phone-input">Phone Number</label>
      <input
        id="phone-input"
        type="number"
        name="number"
        placeholder="+1 (918) 000-0000"
        required="" />
    </div>
    <div class="form-control">
      <label for="referral-input">How did you hear about us?</label>
      <input
        id="referral-input"
        type="text"
        name="Referral"
        placeholder="Facebook, Referral, Google"
        required="" />
    </div>
    <div class="form-control">
      <label for="message-input">How can we help?</label>
      <textarea id="message-input" name="message" cols="20" rows="5" placeholder="" />
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
    <button id="submit" disabled>
      <span> Submit Form </span>
    </button>
    <!-- -->
  </form>
</InteriorLayout>
