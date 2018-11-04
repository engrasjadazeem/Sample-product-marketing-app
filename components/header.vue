<template>
  <div>
    <!-- Nav bar -->
    <b-navbar
      toggleable
      type="light"
      variant="light">
      <b-navbar-toggle
        target="nav_text_collapse" />
      <b-navbar-brand>
        Product Marketing App
      </b-navbar-brand>
      <b-collapse
        id="nav_text_collapse"
        is-nav>
        <b-navbar-nav>
          <b-nav-text>
            <nuxt-link
              to="/phones">
              Phones
            </nuxt-link>
          </b-nav-text>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <!-- Jumbotron-->
    <b-jumbotron
      bg-variant="dark"
      text-variant="white"
      border-variant="dark">
      <template
        slot="header">
        Serve you the best!
      </template>
      <template
        slot="lead">
        Here you find the best phones of all times
      </template>
      <hr
        class="my-4">
      <small>
        The Happiest place on earth
      </small>
    </b-jumbotron>
  </div>
</template>

<script>
export default {}
</script>
