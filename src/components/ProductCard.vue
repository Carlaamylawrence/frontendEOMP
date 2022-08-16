<template>
  <router-link :to="{ name: 'product', params: { id: product.id } }">
    <!-- <div class="productDetails">
      <img v-bind:src="product.img" />
      {{ product.title }}
    </div> -->
 <h2>{{ product.title }}</h2>   
  </router-link>
</template>
<script>
export default {
  props: ["product"],
};
</script>
<style></style>
