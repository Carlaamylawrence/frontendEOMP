<template>
<section id="productsPanel">
 <!-- Button trigger modal -->
 <div class="addbtn">
<button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Add Product Here
</button>
</div>
<div class="products-grid" v-if="products.length">
  <ProductCard
    v-for="product in products"
    :key="product.id"
    :product="product"
  />
  </div>
 

<!-- Modal -->
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Insert Product Details below</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form  @submit.prevent="addProduct">
          <label><input type="text" name="title" v-model="title" />Title</label>
          <label><input type="text" name="img" v-model="img" />Image Url</label>
          <label><input type="text" name="thumbnail" v-model="thumbnail" />Image Thumbnail</label>
          <label><input type="number" name="price" v-model="price" />Price</label>
          <label><input type="text" name="color" v-model="color" />Color</label>
          <label><input type="text" name="description" v-model="description" />Description</label>
          <label><input type="number" name="quantity" v-model="quantity" />QTY</label>
          <label><input type="text" name="category" v-model="category" />Category</label>
          <label><input type="text" name="sku" v-model="sku" />sku</label>
          <label><input type="text" name="available" v-model="available" />Available</label>
          <button>ADD PRODUCT</button>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</div>
</section>
</template>
<script>
import ProductCard from "../components/ProductCard.vue";
export default {
  computed: {
    products() {
      console.log(this.$store.state.products);
      return this.$store.state.products;
    },
    product(){
      return this.$store.state.product;
    }
  },
  data(){
    return{
        title: "",
        img: "",
        thumbnail: "",
        price: "",
        color: "",
        description: "",
        quantity: "",
        category: "",
        sku: "",
        available: "",
    };
  },
  methods:{
    addProduct(){
      let product = {
      title: this.title,
        img: this.img,
        thumbnail: this.thumbnail,
        price: this.price,
        color: this.color,
        description: this.description,
        quantity: this.quantity,
        category: this.category,
        sku: this.sku,
        available: this.available,
      };
      this.$store.dispatch("addProduct", product)
    }
  },
  components: { ProductCard },
  mounted() {
    this.$store.dispatch("getProducts");
  },
};
</script>
<style>
.products-grid {
  display: flex;
  flex-wrap: wrap;
  grid-row-gap: 4rem;
  grid-column-gap: 2rem;
  overflow: scroll;
  padding: 4rem 0.5rem;
  justify-content: center;
  height: 100vh;
  position: absolute;
}</style>
