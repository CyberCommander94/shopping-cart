<template>
  <div class="message-container">
    <h3 class="message-container__text">{{ message }}</h3>
  </div>
</template>

<script>
export default {
  layout: 'mainLayout',
  props: {
    message: {
      type: String,
      default: ''
    }
  }
}
</script>

<style></style>
