<template>
  <div class="main-wrapper">
    <h1>{{ data }}</h1>
    <hr/>
    <v-catalog />
    <v-cart v-if="CART.length" :cart_data="CART"/>
  </div>
</template>

<script>
import vCatalog from "./v-catalog.vue";
import vCart from "./v-cart.vue";
import { mapGetters } from 'vuex';
export default {
  name: "main-wrapper",
  components: { vCatalog, vCart },
  props: {},
  data() {
    return {
      data: "OnlineShop",
    };
  },
  computed: {
        ...mapGetters([
            'CART'
        ])
    }
};
</script>

<style lang="scss">
@import "../assets/styles/styles.scss";

.main-wrapper {
    h1 {
        margin-top: 0;
    }
    hr {
        border: 1px solid #505050;
        margin-bottom: 4rem;
        max-width: 900px;
    }
}
</style>
