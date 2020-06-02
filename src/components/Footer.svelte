<script>

</script>

<style>
  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4em;
    background: #dadada;
  }
  footer p {
    font-weight: 500;
    font-size: 1.3em;
    margin: 0;
  }
  footer a {
    font-weight: bold;
  }
  footer img {
    height: 2.5em;
  }
  footer .credit-svelte {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  footer .credit-svelte p {
    margin-right: 0.3em;
  }
</style>

<footer>
  <div class="container">
    <div>
      <p>
        Designed with &#128154; by
        <a href="/">@CodingLeonardo</a>
      </p>
    </div>
    <div class="credit-svelte">
      <p>Powered by</p>
      <img src="/svelte.svg" alt="Svelte" />
    </div>
  </div>
</footer>
