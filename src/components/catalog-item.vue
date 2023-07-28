<template>
  <div class="catalog-item">
    <div class="img-block">
      <img :src="`${product_data.image}`" alt="" />
    </div>
    <div class="info-product">
      <p>{{ product_data.name }}</p>
      <p>Price: {{ product_data.price }} TJS.</p>
      <button @click="addToCart">Add to cart</button>
    </div>
  </div>
</template>

<script>
export default{
  data() {
    return {
      emits: ['addToCart'],
    }
  },
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
    addToCart() {
      this.$emit('addToCart', this.product_data)
    }
  },
};
</script>

<style lang="scss">
@import "../assets/styles/styles.scss";

.catalog-item {
  display: grid;
  padding: 1rem;
  background: linear-gradient(145deg, #565656, #747474);
  border-radius: 16px;
  box-shadow: 9.91px 9.91px 15px #5c5c5c, -9.91px -9.91px 15px #6e6e6e;
  margin-top: 1rem;
  margin-bottom: 1rem;

  .info-product {
    align-self: end;
    display: grid;
    height: 100%;
  }

  .img-block {
    width: 100%;
    overflow: hidden;
    border-radius: 12px;
    height: 300px;
    
    :hover {
        transform: scale(2);
      }

    img {
      width: 100%;
      height: 300px;
      object-fit: cover;
      border-radius: 12px;
      transition: 10s ease;
    }
  }
}
</style>
