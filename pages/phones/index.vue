<template>
  <section class="asjad">
    <div>
      <h2 class="mb-3">Find the perfect phone for yourself</h2>
    </div>

    <productTile
      v-for="phone in products.phones"
      :key="phone.id"
      :id= "phone.id"
      :title= "phone.name"
      :image= "phone.imageUrl"
      :features= "phone.features"/>
  </section>
</template>

<script>
import productTile from '~/components/productTile.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    productTile
  },
  computed: {
    products() {
      return this.$store.getters.getData
    }
  },
  async fetch({ store }) {
    await store.dispatch('getPhones')
  }
}
</script>

<style>
</style>
