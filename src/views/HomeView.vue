<template>
 
  <section id="dashboard">
    <p>Welcome to the dashboard</p>
  </section>
</template>

<script>
// @ is an alias to /src
export default {
  computed: {
   
    user() {
      console.log(this.$store.state.user);
      return this.$store.state.user;
    },
  },
  methods: {
    
  },
};
</script>
<style scoped>


#dashboard{
  min-height: 90vh;
background: url(../assets/castbackground.png);
background-position: center;
background-repeat: no-repeat;
background-size: cover;
}
</style>

