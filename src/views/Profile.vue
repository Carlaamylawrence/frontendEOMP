<template>
<section id="profilePanel">
      {{user.fullname}}'s Profile
    <div class="cartPanel">
    <CartDisplay
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
    </div>
</section>
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
<style>
#profilePanel{
  min-height: 90vh;
  background: url(../assets/castbackground.png);
background-position: center;
background-repeat: no-repeat;
background-size: cover;
}
.cartPanel{
  border-radius: 8px;
  height: 100%;
  width:100%;
  background-color: white;
}
</style>
