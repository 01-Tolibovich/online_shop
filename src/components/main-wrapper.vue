<template>
  <div class="main-wrapper">
    <h1>{{ data }}</h1>
    <hr/>
    <v-catalog />
    <v-cart />
  </div>
</template>

<script>
import vCatalog from "./v-catalog.vue";
import vCart from "./v-cart.vue";
export default {
  name: "main-wrapper",
  components: { vCatalog, vCart },
  props: {},
  data() {
    return {
      data: "OnlineShop",
    };
  },
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
