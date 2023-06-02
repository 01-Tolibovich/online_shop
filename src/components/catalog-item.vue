<template>
  <div class="catalog-item">
    <img :src="`${product_data.image}`" alt="" />
    <div class="info-product">
      <p>{{ product_data.name }}</p>
      <p>Price: {{ product_data.price }} TJS.</p>
      <button @click="sendDataToPerrent">Add to cart</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "catalog-item",
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    sendDataToPerrent() {
      this.$emit("sendArticle", this.product_data.article);
    },
  },
};
</script>

<style lang="scss">
@import "../assets/styles/styles.scss";
.catalog-item {
  display: grid;
  padding: 0.5rem;
  background: linear-gradient(145deg, #565656, #747474);
  border-radius: 16px;
  box-shadow: 9.91px 9.91px 15px #5c5c5c, -9.91px -9.91px 15px #6e6e6e;

  .info-product {
    align-self: end;
    display: grid;
    height: 100%;
  }
  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 8px 8px 0 0;
  }
}
</style>
