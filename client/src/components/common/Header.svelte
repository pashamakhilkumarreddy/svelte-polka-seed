<header class="header">
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a href="/" class="navbar-item">
        <img src="https://bulma.io/images/bulma-logo.png" alt="Main Logo" decoding="async" loading="lazy"
          importance="high" />
      </a>

      <span role="button" class="navbar-burger burger" class:is-active="{showMobileNavbar}"
      aria-label="menu" aria-expanded="false" data-target="main-navbar" on:click="{ e => { showMobileNavbar = !showMobileNavbar} }">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </span>
    </div>

    <div id="main-navbar" class="navbar-menu" class:is-active="{showMobileNavbar}">
      <div class="navbar-start">
        <a href="/" class="navbar-item">
          Home
        </a>
      </div>
      <div class="navbar-end">
        <a href="/" class="navbar-item">
          <span class="button is-info">
            Login
          </span>
        </a>
      </div>      
    </div>
  </nav>
</header>
<script>
let showMobileNavbar = false;
</script>
<style>
  .header {
    border-bottom: 1px solid #ddd;
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.2);
  }
</style>