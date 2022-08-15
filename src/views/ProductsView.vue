<template>
  <ProductCard
    v-for="product in products"
    :key="product.id"
    :product="product"
  />
</template>
<script>
import ProductCard from "../components/ProductCard.vue";
export default {
  computed: {
    products() {
      console.log(this.$store.state.products);
      return this.$store.state.products;
    },
  },
  components: { ProductCard },
  mounted() {
    this.$store.dispatch("getProducts");
  },
};
</script>
<style></style>
