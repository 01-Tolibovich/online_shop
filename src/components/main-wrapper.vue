<template>
    <h1>{{ data }}</h1>
    <v-catalog/>
    <v-cart/>
</template>

<script>
import vCatalog from './v-catalog.vue';
import vCart from './v-cart.vue';
export default {
    name: "main-wrapper",
    components: {vCatalog, vCart},
    props: {

    },
    data() {
        return {
            data: "main wrapper"
        }
    }
}
</script>