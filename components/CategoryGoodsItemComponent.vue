<template>
  <article>
    <figure :style="{ backgroundImage: 'url(' + itemInfo.path + ')' }">
      <figcaption>
        <span class="goods-name">{{ itemInfo.name }}</span>
        <span class="goods-cost">${{ itemInfo.cost }}</span>
      </figcaption>
    </figure>
    <div class="control-btns">
      <div class="btn minus-btn" @click="subAmount()"></div>
      <div class="amount-info">
        amount<br />
        <p>{{ getCurrItemAmount(itemInfo.id) }}</p>
      </div>
      <div class="btn add-btn" @click="addAmount()"></div>
    </div>
  </article>
</template>
<script>
import { mapMutations, mapGetters } from 'vuex'
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
    ...mapGetters('pages/cart', ['getCurrItemAmount'])
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
