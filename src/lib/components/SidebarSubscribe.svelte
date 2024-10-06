<script>
  import { enhance } from "$app/forms"
</script>

<div class="sidebar-cta">
  <h2>Subscribe to <br /> our Newsletter</h2>
  <p>
    Subscribe to our newsletter and stay up-to-date with the latest news, exclusive offers, and
    exciting updates.
  </p>
  <form
    name="Contact Form"
    method="post"
    action="/"
    use:enhance={({ cancel }) => {
      cancel()
    }}>
    <div class="form-control">
      <label for="">
        <input type="email" name="find-us" placeholder="Email Address" required />
      </label>
    </div>
    <button type="submit">Subscribe Now</button>
  </form>
</div>
