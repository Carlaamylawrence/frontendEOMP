<template>
<nav>
  <div id="Nav-links" class="">
    
    <router-link to="/">HOME</router-link> 

    <div id="userNav-links" v-if="user">
      <router-link to="/products">PRODUCTS</router-link> /
      <router-link to="/profile">PROFILE</router-link>  /
      <button class="btn"> LOGOUT </button>
    </div>
    <div id="authNav-links" v-else>
      <router-link to="/login">LOGIN</router-link> /
      <router-link to="/Register">REGISTER</router-link> 
   </div>
  </div>
  </nav>
</template>
<script>
export default {
  computed: {
    user() {
      console.log(this.$store.state.user);
      return this.$store.state.user;
    },
  },
};
</script>
<style>
#Nav-links{

  display:flex;
  justify-content: space-evenly;
}

nav {
  width: 50%;
  padding: 10px;
  border-radius: 8px;
}

nav a {
  font-weight: bold;
  color: #776b4b;
  text-decoration: none;
}
nav a:hover{
  
  color: #523d1e;
  
}

nav a.router-link-exact-active {
  color: #664821;
}
</style>
