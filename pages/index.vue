<template>
  <div class="home-page">
    <AppHeaderComponent
      title="Shopping Cart. Make Your purchases right now!"
      :is-back-btn-visible="true"
      :is-cart-btn-visible="true"
      total-cost="5640"
      :mobile-content-scroll="mobileContentScrollComputed"
    />
    <section
      class="categories-list-container-mobile"
      @scroll="getScrolledPixels($event)"
    >
      <div class="categories-list-wrapper-mobile">
        <CategoriesItem
          v-for="(item, index) in getCategoriesData"
          :key="index"
          :item-info="item"
          :index="index"
          :is-mobile-window-width="isMobileWindowWidth"
        />
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { vueWindowSizeMixin } from 'vue-window-size'
import CategoriesItem from '~/components/CategoriesItemComponent.vue'

export default {
  components: {
    CategoriesItem
  },
  layout: 'mainLayout',
  mixins: [vueWindowSizeMixin],
  data() {
    return {
      mobileContentScroll: 0
    }
  },
  computed: {
    ...mapGetters('pages/categories', ['getCategoriesData']),
    isMobileWindowWidth() {
      return this.windowWidth < 768
    },
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
