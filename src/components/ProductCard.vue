<template>
  <router-link :to="{ name: 'product', params: { id: product.id } }">
    <div class="product-card "> 
    <img v-bind:src="product.img" class="jewelsPic" />
      <div class="product-info ">
    <h2 >{{ product.title }}</h2>
    <p>{{ product.category }}</p>
   
    </div>
    </div>
  </router-link>
</template>
<script>
export default {
  props: ["product"],
};
</script>
<style>
.product-Card{
width: 22rem;
  height: 30rem;
  border-radius: 0.2rem;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  position: relative;
}
.jewelsPic{
  border-radius: 8px;
  width: 100%;
    height: 100%;
    object-fit: cover;
}

.jewelsPic:hover{
box-shadow: 1px 1px 1px 2px rgba(116, 86, 32, 0.8);
}
.product-info {
    opacity: 0;
    transition: 3s;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50% -50%);
    text-align: center;
  }
</style>
