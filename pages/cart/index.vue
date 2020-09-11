<template>
  <section>
    <AppHeaderComponent
      title="Your Cart"
      :is-back-btn-visible="true"
      :is-cart-btn-visible="false"
      :total-cost="getTotalPrice"
      :mobile-content-scroll="mobileContentScrollComputed"
    />
    <EmptyFolderMessageComponent
      v-if="getTotalPrice === 0"
      message="Your cart is empty now!"
    />
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  layout: 'mainLayout',
  data() {
    return {
      mobileContentScroll: 0
    }
  },
  computed: {
    ...mapGetters('pages/cart', ['getTotalPrice']),
    mobileContentScrollComputed() {
      return this.mobileContentScroll
    }
  },
  methods: {
    getScrolledPixels(event) {
      this.mobileContentScroll = event.target.scrollTop
    }
  }
}
</script>

<style></style>
