<template>
  <footer class="cart-footer">
    <div class="elements-wrapper">
      <div class="footer-continue-button-container">
        <nuxt-link
          class="footer-continue-button-container__continue-button"
          to="/"
          ><span>Continue shopping</span>
        </nuxt-link>
      </div>
      <div class="footer-buy-button-container">
        <div
          class="footer-buy-button-container__buy-button"
          to="/"
          @click="buyItems()"
        >
          <span>Make purchase!</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: {
    totalPrice: {
      type: Number,
      default: 0
    }
  },
  methods: {
    ...mapMutations('pages/cart', ['clearCartData']),
    buyItems() {
      alert('Items sold! Total price: ' + '$' + this.totalPrice)
      this.clearCartData()
      this.$router.push('/')
    }
  }
}
</script>

<style></style>
