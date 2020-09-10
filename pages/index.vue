<template>
  <div class="home-page">
    <AppHeaderComponent
      title="Shopping Cart. Make Your purchases right now!"
      :is-back-btn-visible="false"
      :is-cart-btn-visible="true"
      total-cost="5640"
      :mobile-content-scroll="mobileContentScrollComputed"
    />
    <section
      class="categories-list-container"
      @scroll="getScrolledPixels($event)"
    >
      <div class="categories-list-wrapper">
        <CategoriesItem
          v-for="(item, index) in getCategoriesData"
          :key="index"
          :item-info="item"
          :index="index"
        />
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CategoriesItem from '~/components/CategoriesItemComponent.vue'

export default {
  components: {
    CategoriesItem
  },
  layout: 'mainLayout',
  data() {
    return {
      mobileContentScroll: 0
    }
  },
  computed: {
    ...mapGetters('pages/categories', ['getCategoriesData']),
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
