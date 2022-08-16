<template>
  <div></div>
</template>
<script>
export default {
  computed: {
    users() {
      console.log(this.$store.state.users);
      return this.$store.state.users;
    },
    user() {
      return this.$store.state.user;
    },
  },
  mounted() {
    this.$store.dispatch("getUsers");
  },
};
</script>
<style></style>
