<template>
  <div class="container">
    <appHeader />
    <nuxt/>
    <appFooter />
  </div>
</template>


<script>
import appHeader from '~/components/header.vue'
import appFooter from '~/components/footer.vue'

export default {
  components: {
    appHeader,
    appFooter
  }
}
</script>
