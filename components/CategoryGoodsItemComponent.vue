<template>
  <article>
    <figure :style="{ backgroundImage: 'url(' + itemInfo.path + ')' }">
      <figcaption>
        <span class="goods-name">{{ itemInfo.name }}</span>
        <span class="goods-cost">${{ itemInfo.cost }}</span>
      </figcaption>
    </figure>
    <div class="control-btns">
      <button @click="subAmount()">-</button>
      <div class="amount-info">
        amount<br />
        <p>{{ currItemAmount }}</p>
      </div>
      <button @click="addAmount()">+</button>
    </div>
  </article>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  props: {
    itemInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {}
  },
  computed: {
    currItemAmount() {
      return this.$store.getters['pages/cart/getCurrItemAmount'](
        this.itemInfo.id
      )
    }
  },
  methods: {
    ...mapMutations('pages/cart', ['addCartItem', 'removeCartItem']),
    addAmount() {
      this.addCartItem({
        id: this.itemInfo.id,
        name: this.itemInfo.name,
        amount: 1,
        cost: this.itemInfo.cost
      })
    },
    subAmount() {
      this.removeCartItem({ id: this.itemInfo.id })
    }
  }
}
</script>
