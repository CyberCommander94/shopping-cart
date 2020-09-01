<template>
  <header class="header-block">
    <div class="elements-wrapper">
      <div class="header-back-button-container">
        <nuxt-link
          v-if="isBackBtnVisible"
          class="header-back-button-container__back-button"
          to="/cart"
        ></nuxt-link>
      </div>
      <div class="header-title-container">
        <h2 class="header-title-container__title">{{ title }}</h2>
      </div>
      <div class="header-cart-button-container">
        <nuxt-link
          v-if="isCartBtnVisible"
          class="header-cart-button-container__cart-button"
          to="/cart"
          >${{ totalCost }}
        </nuxt-link>
      </div>
    </div>
    <div class="mobile-header-title-container">
      <h2 class="mobile-header-title-container__title">{{ title }}</h2>
    </div>
  </header>
</template>
<script>
export default {
  name: 'AppHeaderComponent',
  props: {
    isBackBtnVisible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    isCartBtnVisible: {
      type: Boolean,
      default: false
    },
    totalCost: {
      type: String,
      default: ''
    }
  },
  data() {
    return {}
  }
}
</script>
