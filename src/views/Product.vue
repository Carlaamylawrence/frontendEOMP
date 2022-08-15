<template lang="">
  <div v-if="product">
    <div>
      {{ product.title }}
    </div>
  </div>
</template>
<script>
export default {
  props: ["id"],
  computed: {
    product() {
      return this.$store.state.product;
    },
  },
  mounted() {
    this.$store.dispatch("getProduct", this.id);
    console.log("shiiiit");
  },
};
</script>
<style lang=""></style>
