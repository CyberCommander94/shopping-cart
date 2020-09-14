<template>
  <section>
    <AppHeaderComponent
      title="Your Cart"
      :is-back-btn-visible="true"
      :is-cart-btn-visible="false"
      :total-cost="getTotalPrice"
      :mobile-content-scroll="mobileContentScrollComputed"
    />
    <div v-if="getCartData.length > 0" class="cart-content">
      <div class="cart-content__header">
        <div class="name-cell">Name:</div>
        <div class="amount-cell">Amount:</div>
        <div class="delete-btn-cell"></div>
      </div>
      <div class="cart-content__main">
        <div class="main-content-wrapper">
          <div
            v-for="(item, index) in getCartData"
            :key="index"
            class="order-row"
          >
            <div class="name-cell">{{ item.name }}</div>
            <div class="amount-cell">
              <div class="amount-cell__controls">
                <div class="div-amount">-</div>
                <span class="total-amount">{{ item.amount }}</span>
                <div class="add-amount">+</div>
              </div>
              <div class="amount-cell__total">
                ${{ item.amount * item.cost }}
              </div>
            </div>
            <div class="delete-btn-cell">
              <div class="delete-btn-cell__delete-button"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="cart-content__footer">
        <div>Cart total price:</div>
        <div>${{ getTotalPrice }}</div>
      </div>
    </div>
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
