<template>
  <router-link :to="{ name: 'product', params: { id: product.id } }">
    <img v-bind:src="product.img" />
    <h2>{{ product.title }}</h2>
    <p>{{ product.category }}</p>
  </router-link>
</template>
<script>
export default {
  props: ["product"],
};
</script>
<style></style>
