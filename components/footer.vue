<template>
  <footer class="footer">
    <div class="container bg-light">
      <span class="text-muted">All rights reserved Product Marketing Company {{ date }}.</span>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      date: new Date().getFullYear()
    }
  }
}
</script>

<style>
.footer {
  position: static;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 60px;
  line-height: 60px;
  float: right;
}
</style>
