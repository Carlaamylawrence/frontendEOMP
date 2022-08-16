<template>
  <div>
    <form @submit.prevent="register">
      <p>Register your profile on Jewels</p>
      <fieldset>
        <!-- Email -->
        <label
          >Enter Email <input type="text" name="email" required v-model="email"
        /></label>

        <!-- Password -->
        <label
          >Enter Password
          <input type="text" name="Password" required v-model="password"
        /></label>

        <!-- Fullname -->
        <label
          >Enter Your Full name
          <input type="text" name="fullname" required v-model="fullname"
        /></label>

        <!-- Password -->
        <label
          >Enter Your Phone number
          <input type="text" name="phone" required v-model="phone"
        /></label>
      </fieldset>
      <!-- Button to submit  -->
      <input type="submit" value="Register" />
    </form>
    <div v-if="user">
      Welcome {{ user.fullname }}, Your sign up was successsul
    </div>
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
      fullname: "",
      email: "",
      password: "",
      phone: "",
      userRole: "",
    };
  },
  methods: {
    register() {
      let user = {
        fullname: this.fullname,
        email: this.email,
        password: this.password,
        phone: this.phone,
        userRole: this.userRole,
      };
      this.$store.dispatch("register", user);
    },
  },
};
</script>
<style></style>
