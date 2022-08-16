<template>
    <div>
      {{user.fullname}}'s Profile
    </div>
    <CartDisplay
      v-for="product in products"
      :key="product.id"
      :product="product"
    />

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
