<template>
  <h2 >Catalog</h2>
  <div class="catalog">
  <catalogItem
    class="catalogitem"
    v-for="product in PRODUCTS"
    :key="product.article"
    :product_data="product"
    @sendArticle="showArticle"
  />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import catalogItem from "./catalog-item.vue";
export default {
  name: "v-catalog",
  components: { catalogItem },
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters([
      'PRODUCTS'
    ])
  },
  methods: {
    ...mapActions([
      'GET_PRODUCT_FROM_API'
    ]),
    showArticle(data) {
        console.log(data);
    }
  },
  mounted() {
    this.GET_PRODUCT_FROM_API()
  }
};
</script>

<style lang="scss">
@import '../assets/styles/styles.scss';
.catalog {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 1fr;
  gap: 2rem;
}
</style>
