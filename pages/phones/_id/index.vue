<template>
  <div v-if="dataReady">
    <div class="col-lg-4 col-md-4 col-sm-12 float-left">
      <b-img :src="phone.imageUrl" fluid alt="Responsive image" />
    </div>
    <b-card
      class="col-lg-8 col-md-8 col-sm-12 float-right">
        <div>
          <h3>{{ phone.name }}</h3>
          <small>{{ phone.date }}</small>

          <h5>Features</h5>
          <ul>
            <li v-for="feature in phone.features">
              {{ feature }}
            </li>
          </ul>
          <a
            :href="phone.readmore"
            target="_blank">
            Read more...
          </a>
        </div>
        <div>
          <h2>{{ phone.price }}</h2>
        </div>
    </b-card>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    phone: function() {
      return this.$store.getters.getPhoneById(this.$route.params.id)
    },
    dataReady: function() {
      if (Object.keys(this.$store.state.data).length > 0) {
        return true;
      } else {
        return false;
      }
    }
  },
  async fetch({ store }) {
    await store.dispatch('getPhones')
  }
}
</script>
