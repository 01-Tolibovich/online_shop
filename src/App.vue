<template>
  <img class="logo" alt="Vue logo" src="../public/shop-svgrepo-com.svg">
  <main-wrapper></main-wrapper>
</template>

<script>
import mainWrapper from './components/main-wrapper.vue';
export default {
  name: "app",
  components: {mainWrapper}
}
</script>

<style lang="scss">
@import "../src/assets/styles/styles.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  .logo {
    max-width: 100px;
  }
}
</style>
