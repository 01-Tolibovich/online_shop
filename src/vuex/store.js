import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    products: [],
    cart: [],
  },
  mutations: {
    SET_PRODUCT_TO_STATE: (state, products) => {
      state.products = products;
    },
    SET_CART: (state, product) => {
    //   const {article} = product;

      if(state.cart.filter((item) => article === item.article).length > 0) {
        console.log('1111');
      } else if (!state.cart.filter((item) => article === item.article).length > 0) {
        product.quantity = 1;
        state.cart.push(product);
      }
      

    //   if (product.quantity) {
        
    //   }

    //   console.log(product.quantity);
      //   let cartArticle = [];
      //   let productArticle = [];

      //   for (let itemInCart in state.cart) {
      //     cartArticle = state.cart[itemInCart].article

      //   }
      //   for (let itemInProducts in state.products) {
      //     productArticle = [itemInProducts]
      //     console.log(itemInProducts);
      //   }

      //   if (productArticle == cartArticle ) {
      //     console.log('yes');
      //   }
      //   console.log(cartArticle);
      //   console.log(productArticle);
    },
  },
  actions: {
    GET_PRODUCT_FROM_API({ commit }) {
      return axios("http://localhost:3000/products", {
        method: "GET",
      })
        .then((products) => {
          commit("SET_PRODUCT_TO_STATE", products.data);
          return products;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
    ADD_TO_CART({ commit }, product) {
      commit("SET_CART", product);
    },
  },
  getters: {
    PRODUCTS(state) {
      return state.products;
    },
    CART(state) {
      return state.cart;
    },
  },
});
