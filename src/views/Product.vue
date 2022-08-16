<template>
  <div v-if="product">
    <div>
      <img v-bind:src="product[0].img" />
      <h2>
        {{ product[0].title }}
      </h2>
      <h4>{{ product[0].category }}</h4>
      <button @click="$store.dispatch('addCart', product[0])">
        Add to List
      </button>
      <p>{{ product[0].description }}</p>
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
    user() {
      console.log(this.$store.state.user);
      return this.$store.state.user;
    },
  },
  mounted() {
    this.$store.dispatch("getProduct", this.$route.params.id);
    console.log("shiiiit");
  },
  methods: {
    addCart() {
      this.$store.dispatch("addNewCartItems", this.id);
    },
  },
};
</script>
<style lang=""></style>
