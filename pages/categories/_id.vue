<template>
  <div class="category-items-page">
    <AppHeaderComponent
      :title="categoryData.categoryName"
      :is-back-btn-visible="true"
      :is-cart-btn-visible="true"
      :total-cost="getTotalPrice"
      :mobile-content-scroll="mobileContentScrollComputed"
    />
    <section
      v-if="categoryData.categoryGoods.length"
      class="goods-list-container"
      @scroll="getScrolledPixels($event)"
    >
      <div class="goods-list-wrapper">
        <CategoryGoodsItem
          v-for="(item, index) in categoryData.categoryGoods"
          :key="index"
          :item-info="item"
          :index="index"
        />
      </div>
    </section>
    <EmptyFolderMessageComponent
      v-else
      message="This category don't have any goods now!"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
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
    ...mapGetters('pages/cart', ['getTotalPrice']),
    ...mapGetters('pages/categories', ['getCategoryData']),
    categoryData() {
      return this.getCategoryData(this.$route.params.id)
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
