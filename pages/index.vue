<template>
  <div class="home-page">
    <AppHeaderComponent
      title="Shopping Cart. Make Your purchases right now!"
      :is-back-btn-visible="false"
      :is-cart-btn-visible="true"
      total-cost="5640"
    />
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'

export default {}
</script>

<style>
.home-page {
  width: 100vw;
  height: 100%;
}
</style>
