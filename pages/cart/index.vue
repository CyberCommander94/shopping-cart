<template>
  <section>
    <AppHeaderComponent
      title="Your Cart"
      :is-back-btn-visible="true"
      :is-cart-btn-visible="false"
      :total-cost="getTotalPrice"
      :mobile-content-scroll="mobileContentScrollComputed"
    />
    <div class="cart-content"></div>
    <CartFooterComponent />
    <EmptyFolderMessageComponent
      v-if="getTotalPrice === 0"
      message="Your cart is empty now!"
    />
  </section>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import CartFooterComponent from '@/components/CartFooterComponent'
export default {
  layout: 'mainLayout',
  components: {
    CartFooterComponent
  },
  data() {
    return {
      mobileContentScroll: 0
    }
  },
  computed: {
    ...mapGetters('pages/cart', ['getTotalPrice', 'getCartData']),
    mobileContentScrollComputed() {
      return this.mobileContentScroll
    }
  },
  methods: {
    ...mapMutations('pages/cart', [
      'clearCartData',
      'deleteCartItemsGroup',
      'removeCartItem'
    ]),
    getScrolledPixels(event) {
      this.mobileContentScroll = event.target.scrollTop
    },
    buyItems() {
      alert('Items sold! Total price: ' + this.getTotalPrice + '$')
      this.clearCartData()
    },
    addAmount(itemInfo) {
      this.addCartItem({
        id: itemInfo.id,
        name: itemInfo.name,
        amount: 1,
        cost: itemInfo.cost
      })
    }
  }
}
</script>

<style></style>
