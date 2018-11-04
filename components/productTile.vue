<template>
  <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12 float-left">
    <b-card
      :title="title"
      :img-src="image"
      img-alt="Image"
      img-top
      style="max-width: 20rem;"
      class="mb-2">
      <p class="card-text">
        {{ features[0] }}
      </p>
      <b-link
        :to="link">
        Click to read more!
      </b-link>
    </b-card>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: 'Title text'
    },
    image: {
      type: String,
      default: 'https://picsum.photos/600/300/?image=25'
    },
    features: {
      type: Array,
      default: 'Update'
    }
  },
  computed: {
    link: function() {
      return `phones/${this.id}`
    }
  }
}
</script>

<style>
.card-img-top {
  height: 300px;
  object-fit: scale-down;
}
</style>
