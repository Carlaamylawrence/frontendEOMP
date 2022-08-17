<template>
<secton id="singleProductPanel">
  <div v-if="product">
    <div>
      <img v-bind:src="product[0].img" class="product-image"/>
      <h2>
        {{ product[0].title }}
      </h2>
      <h4>{{ product[0].category }}</h4>
      <h4>R{{ product[0].price }}</h4>
      <h4>Color: {{ product[0].color }}</h4>
      <p>sku {{ product[0].sku }}</p>
      <button class="btn btn-dark"   @click="$store.dispatch('addCart', product[0])">
        Add to cart
      </button>
      <p>{{ product[0].description }}</p>
    </div>
  </div>

  <div v-else>
    <h2>Loading...</h2>
  </div>
</secton>
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
<style >
#singleProductPanel{
  min-height: 90vh;
  background: url(../assets/castbackground.png);
background-position: center;
background-repeat: no-repeat;
background-size: cover;
}
.product-image{
  border-radius: 8px;
  width: 22rem;
    height: 30rem;
    object-fit: cover;
}
</style>
