<template>
  <section id="productsPanel">
    <!-- Button trigger modal -->
    <div class="products-grid" v-if="products">
      <div class="addbtn">
        <button
          type="button"
          class="btn btn-dark"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
          v-if="user"
        >
          Add Product Here
        </button>
      </div>
      <div class="sort-options">
        <input class="ms-5" type="text" v-model="search" placeholder="Search" />
        <button class="btn btn-outline-dark ms-5" @click="sortProducts">
          Sort By Title
        </button>
        <select v-model="category" class="ms-3">
          <option value="all">All</option>
          <option value="Earrings">Earrings</option>
          <option value="Necklace">Necklaces</option>
          <option value="Rings">Rings</option>
        </select>
      </div>
      <div>
        <ProductCard
          v-for="product of products"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>

    <!-- Modal -->
    <div
      class="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">
              Insert Product Details below
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="addProduct">
              <div class="title form-floating">
                <input
                  type="text"
                  class="form-control"
                  id="floatingTitle"
                  placeholder="Title"
                  v-model="title"
                />
                <label for="floatingTitle">Title</label>
              </div>
              <div class="Image form-floating">
                <input
                  type="text"
                  class="form-control"
                  id="floatingImage"
                  placeholder="Image"
                  v-model="img"
                />
                <label for="floatingImage">Image Url</label>
              </div>
              <div class="Thumbnail form-floating">
                <input
                  type="text"
                  class="form-control"
                  id="floatingThumbnail"
                  placeholder="Thumbnail"
                  v-model="thumbnail"
                />
                <label for="floatingThumbnail">Thumbnail</label>
              </div>
              <div class="Price form-floating">
                <input
                  type="number"
                  class="form-control"
                  id="floatingPrice"
                  placeholder="Price"
                  v-model="price"
                />
                <label for="floatingPrice">Price</label>
              </div>
              <div class="form-floating color">
                <select
                  class="form-select"
                  aria-label="Default select example"
                  v-model="color"
                >
                  <option value="Gold">Gold</option>
                  <option value="Silver">Silver</option>
                  <option value="Rose Gold">Rose Gold</option>
                </select>
                <label for="floatingColor">Color</label>
              </div>
              <div class="Description form-floating">
                <input
                  type="text"
                  class="form-control"
                  id="floatingDescription"
                  placeholder="Description"
                  v-model="description"
                />
                <label for="floatingDescription">Description</label>
              </div>
              <div class="Quantity form-floating">
                <input
                  type="number"
                  class="form-control"
                  id="floatingQuantity"
                  placeholder="Quantity"
                  v-model="quantity"
                />
                <label for="floatingQuantity">Quantity</label>
              </div>
              <div class="form-floating category">
                <select
                  class="form-select"
                  aria-label="Default select example"
                  v-model="category"
                >
                  <option value="Earrings">Earrings</option>
                  <option value="Necklace">Necklaces</option>
                  <option value="Rings">Rings</option>
                  <option value="Bracelets">Bracelets</option>
                </select>
                <label for="floatingCategory">Category</label>
              </div>
              <div class="Sku form-floating">
                <input
                  type="text"
                  class="form-control"
                  id="floatingSku"
                  placeholder="Sku"
                  v-model="sku"
                />
                <label for="floatingSku">Sku</label>
              </div>
              <div class="form-floating available">
                <select
                  class="form-select"
                  aria-label="Default select example"
                  v-model="available"
                >
                  <option value="true">Yes</option>
                  <option value="false">Out of Stock</option>
                </select>
                <label for="floatingAvailable">Available</label>
              </div>
              <div class="User">
                <select
                  class="form-select"
                  aria-label="Default select example"
                  v-model="user_id"
                >
                  <option :value="user.id">User</option>
                </select>
                <label for="floatingAvailable">User</label>
              </div>

              <button class="btn btn-dark">ADD PRODUCT</button>
            </form>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-dark" data-bs-dismiss="modal">
            Close
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import ProductCard from "../components/ProductCard.vue";
export default {
  props: ["id"],
  computed: {
    user() {
      return this.$store.state.user;
    },
    product() {
      return this.$store.state.product;
    },
    products() {
      console.log(this.$store.state.products);
      return this.$store.state.products?.filter((product) => {
        let isMatch = true;
        if (!product.title?.toLowerCase().includes(this.search.toLowerCase()))
          isMatch = false;
        if (this.category !== "all" && product.category !== this.category)
          isMatch = false;
        return isMatch;
      });
    },
  },
  components: { ProductCard },
  mounted() {
    this.$store.dispatch("getProducts");
    // this.$store.dispatch("getUser");
  },
  data() {
    return {
      search: "",
      category: "all",
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
      user_id: "",
    };
  },
  methods: {
    addProduct() {
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
        user_id: this.user_id,
      };
      this.$store.dispatch("addProduct", product);
    },
    sortProducts() {
      this.$store.commit("sortProductsByTitle");
    },
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
}
</style>
