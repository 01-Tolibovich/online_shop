<template>
  <img alt="Vue logo" src="../src/assets/vue.svg">
  <main-wrapper></main-wrapper>
</template>

<script>
import mainWrapper from './components/main-wrapper.vue';
export default {
  name: "app",
  components: {mainWrapper}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
