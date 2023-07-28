<template>
    <div class="cart-item">
        <img :src="`${cart_item_data.image}`" alt="" />
        <p>{{ cart_item_data.name }}</p>
        <p>{{ cart_item_data.price }}</p>
        <p>{{ cart_item_data.article }}</p>
        <p>{{ cart_item_data.quantity }}</p>
        <button @click="test">Delete</button>
    </div>
</template>

<script>
export default {
    name: 'cart-item',
    props: {
        cart_item_data: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    computed: {
  },
  methods: {
    test() {
        console.log(this.PRODUCTS);
    }
  },
    mounted() {
        
    }
}
</script>

<style lang="scss"> 
.cart-item {
    img {
        width: 50px;
        height: auto;
        object-fit: contain;
    }
}
</style>