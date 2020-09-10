<template>
  <div class="category-items-page">
    <AppHeaderComponent
      :title="categoryData.categoryName"
      :is-back-btn-visible="true"
      :is-cart-btn-visible="true"
      total-cost="5640"
      :mobile-content-scroll="mobileContentScrollComputed"
    />
    <section class="goods-list-container" @scroll="getScrolledPixels($event)">
      <div class="goods-list-wrapper">
        <CategoryGoodsItem
          v-for="(item, index) in categoryData.categoryGoods"
          :key="index"
          :item-info="item"
          :index="index"
        />
      </div>
    </section>
  </div>
</template>

<script>
import CategoryGoodsItem from '~/components/CategoryGoodsItemComponent.vue'

export default {
  components: {
    CategoryGoodsItem
  },
  layout: 'mainLayout',
  data() {
    return {
      mobileContentScroll: 0
    }
  },
  computed: {
    categoryData() {
      return this.$store.getters['pages/categories/getCategoryData'](
        this.$route.params.id
      )
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

<style></style>
