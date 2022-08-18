import { createStore } from "vuex";
import { toRaw } from "vue";
export default createStore({
  state: {
    user: null,
    users: null,
    product: null,
    products: null,
    asc: true,
    cart: [],
    jwt: null,
    url: "https://xcjewels.herokuapp.com",
  },
  getters: {},
  mutations: {
    setJwt: (state, jwt) => {
      state.jwt = jwt;
    },
    setUser: (state, user) => {
      state.user = user;
    },
    setUsers: (state, users) => {
      state.users = users;
    },
    setProduct: (state, product) => {
      state.product = product;
    },
    setProducts: (state, products) => {
      state.products = products;
    },
    addNewCartItems: (state, product) => {
      state.cart.push(product);
    },
    clearCartItems: (state, cart) => {
      state.cart = cart;
    },

    sortProductsByTitle: (state) => {
      state.products = state.products.sort((a, b) => {
        // return a.number - b.number;
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      });
    },
  },
  actions: {
    // USER FUNCTIONALITY
    // USER
    // getUser: async (context, id) => {
    //   fetch("http://localhost:5001/users/ :id ")
    //     // fetch("https://xcjewels.herokuapp.com/users/:id" + id)
    //     .then((res) => res.json())
    //     .then((json) => context.commit("setUser", json))
    //     .catch((err) => console.log(err.message));
    // },
    // USERS
    getUsers: async (context) => {
      // fetch("https://xcjewels.herokuapp.com/users")
      fetch("http://localhost:5001/users")
        .then((response) => response.json())
        .then((json) => context.commit("setUsers", json));
    },

    // LOGIN USER

    login: async (context, payload) => {
      // const { email, password } = payload;
      // fetch(`https://xcjewels.herokuapp.com/users/login`, {
      fetch(`http://localhost:5001/users/login`, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          context.commit("setJwt", data.token);
          context.commit("setUser", data.user);
          // context.state.user = data.user;
          // context.state.jwt = data.token;
        });
    },

    // REGISTER USER
    register: async (context, user) => {
      // fetch("https://xcjewels.herokuapp.com/users/register", {
      fetch("http://localhost:5001/users/register", {
        method: "POST",
        body: JSON.stringify(user),
        // mode: cors,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          context.state.jwt = data.token;
          // context.commit("setUser", json));
        });
    },

    // PRODUCT FUNCTIONALITY
    // SHOW ALL OF EM PRODUCTS
    getProducts: async (context) => {
      // fetch("https://xcjewels.herokuapp.com/products")
      const res = await fetch("http://localhost:5001/products")
        .then((response) => response.json())
        .then((json) => context.commit("setProducts", json));

      console.log(res);
    },

    // SHOW ONE ITEM
    getProduct: async (context, id) => {
      console.log(id);
      // fetch("https://xcjewels.herokuapp.com/products/" + id)
      fetch("http://localhost:5001/products/" + id)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          context.commit("setProduct", data);
        });
    },

    addProduct: async (context, data, state) => {
      console.log(context.state.jwt);
      // fetch("https://xcjewels.herokuapp.com/products", {
      fetch("http://localhost:5001/products", {
        method: "POST",
        body: JSON.stringify({
          title: data.title,
          img: data.img,
          thumbnail: data.thumbnail,
          price: data.price,
          color: data.color,
          description: data.description,
          quantity: data.quantity,
          category: data.category,
          sku: data.sku,
          available: data.available,
          user_id: data.user_id,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "x-auth-token": context.state.jwt,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          context.commit("setProduct", data);
        });
    },

    editProduct: async (context, product) => {
      fetch("https://xcjewels.herokuapp.com/products", {
        method: "PATCH",
        body: JSON.stringify(product),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        });
    },

    // PROFILE FUNCTIONALITY
    // ADD TO CART
    addCart: async (context, id, userid) => {
      userid = context.state.user.id;
      let cart = toRaw(context.state.cart);
      cart.push(id);
      console.log(context.state.cart);
      context.dispatch("updateUserCart", cart);
    },
    // DELETE CARD LIST ITEM
    detletCartItem: async (context, id) => {
      const cartCurrent = context.state.cart.filter(
        (product) => product.id != product.id
      );
      context.commit("clearCartItems", cartCurrent);
    },

    updateUserCart: async (context, cart, id) => {
      // const { id, email, password, fullname, phone, cart, userRole } = user;
      id = context.state.user.id;
      fetch("https://xcjewels.herokuapp.com/users/" + id, {
        method: "PATCH",
        body: JSON.stringify({
          email: context.state.email,
          password: context.state.password,
          fullname: context.state.fullname,
          phone: context.state.phone,
          cart: context.state.cart,
          userRole: context.state.userRole,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => context.commit("setUser", json));
    },

    updateUserInfo: async (context, user) => {
      const { id, email, password, fullname, phone, cart, userRole } = user;
      fetch("https://xcjewels.herokuapp.com/users/" + id, {
        method: "PATCH",
        body: JSON.stringify({
          email: email,
          password: password,
          fullname: fullname,
          phone: phone,
          cart: cart,
          userRole: userRole,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => context.commit("setUser", json));
    },
  },

  modules: {},
});
