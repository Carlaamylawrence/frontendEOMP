<template>
  <div v-if="product">
    <div class="card">
      <h2>{{ product[0].title }}</h2>
      <img v-bind:src="product[0].img" />
      <button @click="$store.dispatch('deleteCartItem', product[0])"> DELETE</button>
    </div>
  </div>
  <div v-else>
    <h2>Cart Empty</h2>
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
