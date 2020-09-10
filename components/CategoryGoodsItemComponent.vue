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
        <p>{{ currAmount }}</p>
      </div>
      <button @click="addAmount()">+</button>
    </div>
  </article>
</template>

<script>
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
    return {
      currAmount: '0'
    }
  },
  methods: {
    subAmount() {},
    addAmount() {}
  }
}
</script>
