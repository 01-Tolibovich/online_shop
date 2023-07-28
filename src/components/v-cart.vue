<template>
  <h1>Cart</h1>
  <p>Paragraph</p>
  <cart-item
    v-for="item in cart_data"
    :key="item.article"
    :cart_item_data="item"
  />
</template>

<script>
import cartItem from "./cart-item.vue";

export default {
  name: "v-cart",
  components: { cartItem },
  props: {
    cart_data: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
