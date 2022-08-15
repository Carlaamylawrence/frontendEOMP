<template>
  <div class="cart"></div>
</template>

<script>
// @ is an alias to /src
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
    addCartItem(item) {
      this.$store.dispatch("addCartItem", item);
    },
    deleteCartItem(id) {
      this.$store.dispatch("deleteCartItem", id);
    },
    updateUserInfo() {
      this.$store.dispatch("updateUserInfo", this.user);
    },
  },
};
</script>
