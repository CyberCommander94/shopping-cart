<template>
  <div class="home-page">
    <AppHeaderComponent
      title="Shopping Cart. Make Your purchases right now!"
      :is-back-btn-visible="false"
      :is-cart-btn-visible="true"
      total-cost="5640"
    />
    <section class="categories-list-container">
      <categories-item
        v-for="(item, index) in getCategoriesData"
        :key="index"
        :item-info="item"
        :index="index"
      ></categories-item>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import CategoriesItem from '~/components/CategoriesItemComponent.vue'

export default {
  components: {
    CategoriesItem
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters('pages/categories', ['getCategoriesData'])
  },
  created() {
    this.loadCategoriesData()
  },
  methods: {
    ...mapActions('pages/categories', ['loadCategoriesData'])
  }
}
</script>

<style>
.home-page {
  width: 100vw;
  height: 100%;
}
</style>
