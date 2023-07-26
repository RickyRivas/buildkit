<script lang="ts">
  // components
  // stores
  // styles
  // logic
  // props
  export let pageTitle: any
</script>

<section id="subheader">
  <div class="container">
    <h1>{pageTitle}</h1>
  </div>
</section>

<style lang="less">
  #subheader {
    background: #000;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding: 8em 0 2em;
    position: relative;
    isolation: isolate;
    @media only screen and(min-width: 768px) {
      text-align: left;
      padding: 0 0 3em 0;
      height: (373/20em);
    }
    &::before {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      background: linear-gradient(90.01deg, #27631a 16.86%, rgba(0, 0, 0, 0) 100%);
    }

    .container {
      text-align: center;
      width: 96%;
      max-width: (1200/20em);
      margin: 0 auto;
      @media only screen and(min-width: 768px) {
        text-align: left;
      }
    }

    h1 {
      color: white;
      font-weight: bold;
      font-size: (49/20em);
      line-height: 1.2;
      text-transform: uppercase;
    }
  }
</style>
