<template>
    <div id="app">
        <the-navigation />
        <router-view/>
    </div>
</template>

<script>
import TheNavigation from "./components/TheNavigation.vue";

export default {
    name: "App",
    components: {
        TheNavigation,
    },
};
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
</style>
