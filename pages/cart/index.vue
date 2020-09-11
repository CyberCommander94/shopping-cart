<template>
  <section>
    <AppHeaderComponent
      title="Your Cart"
      :is-back-btn-visible="true"
      :is-cart-btn-visible="false"
      :total-cost="getTotalPrice"
      :mobile-content-scroll="mobileContentScrollComputed"
    />
    <div class="cart-content">
      <div class="cart-content-wrapper">
        <div class="table-wrapper">
          <table>
            <thead>
              <tr>
                <td class="list-cell">Shop List</td>
                <td class="amount-cell">Amount</td>
                <td class="price-cell">Price</td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in getCartData" :key="index">
                <td>
                  <button
                    class="delete-btn"
                    @click="deleteCartItemsGroup(item)"
                  ></button>
                  <span>{{ item.name }}</span>
                </td>
                <td>
                  <button class="minus-btn" @click="removeCartItem(item)">
                    <span>-</span>
                  </button>
                  {{ item.amount }}
                  <button class="plus-btn" @click="addAmount(item)">
                    <span>+</span>
                  </button>
                </td>
                <td>${{ item.amount * item.cost }}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td>
                  <button class="clear-all-btn" @click="clearAll()">
                    Clear All
                  </button>
                </td>
                <td></td>
                <td>
                  Sum
                  <span class="final-cost">${{ getTotalPrice }}</span>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div class="buying-btns">
          <nuxt-link to="/" class="continue">Continue Shopping</nuxt-link>
          <button @click="buyItems()">Buy</button>
        </div>
      </div>
    </div>
    <EmptyFolderMessageComponent
      v-if="getTotalPrice === 0"
      message="Your cart is empty now!"
    />
  </section>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  layout: 'mainLayout',
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
