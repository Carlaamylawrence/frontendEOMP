<template>
  <div v-if="product">
    <div>
      <h2>
        {{ product[0].title }}
      </h2>
    </div>
  </div>
  <div v-else>
    <h2>Loading...</h2>
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
    this.$store.dispatch("getProduct", this.$route.params.id);
    console.log("shiiiit");
  },
};
</script>
<style lang=""></style>
