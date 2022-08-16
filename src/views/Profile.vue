<template>
  <div class="container row">
    <h4 class="head">YOUR Cart</h4>

    <CartDisplay
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>
<script>
import CartDisplay from "../components/CartDisplay.vue";
export default {
  computed: {
    cart() {
      return this.$store.state.user.cart;
    },
    user() {
      console.log(this.$store.state.user);
      return this.$store.state.user;
    },
  },
  methods: {
    deleteCartItem(id) {
      this.$store.dispatch("clearCartItems", id);
    },
    updateUserInfo() {
      this.$store.dispatch("updateUserInfo", this.user);
    },
  },
  components: { CartDisplay },
};
</script>
<style></style>
