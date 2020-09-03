<template>
  <nuxt-link
    :to="{ params: { id: itemInfo.id } }"
    :class="ratioClass"
    class="category-item"
  >
    <figure :style="{ 'background-image': 'url(' + itemInfo.categoryBg + ')' }">
      <figcaption>{{ itemInfo.categoryName }}</figcaption>
    </figure>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    itemInfo: {
      type: Object,
      default() {
        return {}
      }
    },
    index: {
      type: Number,
      default: 0
    },
    img: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      ratioClass: ''
    }
  }
  // async created() {
  //   await this.getImgRatio(this.itemInfo.categoryBg).then((ratio) => {
  //     this.ratioClass = this.addRatioClass(ratio)
  //   })
  // },
  // methods: {
  //   getImgRatio(url) {
  //     return new Promise(function (resolve) {
  //       const img = new Image()
  //       img.onload = function () {
  //         resolve(
  //           Math.round((img.naturalWidth / img.naturalHeight) * 100) / 100
  //         )
  //       }
  //       img.src = url
  //     })
  //   },
  //   addRatioClass(ratio) {
  //     let ratClass = ''
  //     if (ratio > 2) {
  //       ratClass = 'extra-wide'
  //     } else if (ratio <= 2 && ratio >= 1.3) {
  //       ratClass = 'wide'
  //     } else if (ratio < 1.3 && ratio >= 1) {
  //       ratClass = 'small'
  //     } else if (ratio < 1 && ratio >= 0.75) {
  //       ratClass = 'large'
  //     } else if (ratio < 0.75) {
  //       ratClass = 'high'
  //     }
  //     return ratClass
  //   },
  // },
}
</script>
