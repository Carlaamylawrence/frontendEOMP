<template>
  <div>
    <h2>{{ prodcut[0].title }}</h2>
  </div>
</template>
<script>
export default {
  props: ["product"],
  methods: {
    deleteCartItem(product) {
      this.$store.dispatch("clearCartItems", product);
    },
  },
};
</script>
<style></style>
