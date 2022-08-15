<template>
  <div>
    <form @submit.prevent="login">
      <p>Log in to Jewels</p>
      <fieldset>
        <!-- Email -->
        <label
          >Enter Email
          <input type="text" name="user-name" required v-model="email"
        /></label>

        <!-- Password -->
        <label
          >Enter Password
          <input type="text" name="user-name" required v-model="password"
        /></label>
      </fieldset>
      <!-- Button to submit  -->
      <input type="submit" value="Login" />
    </form>
    <div v-if="user">Welcome {{ user.fullname }}</div>
  </div>
</template>
<script>
export default {
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>
<style></style>
