<template>
    <nav>
        <router-link
            v-for="({ to, name }, index) in links"
            v-bind:key="to"
            v-bind="{ to }"
        >
            <span>{{ name }}</span>
            <span v-if="index < links.length - 1">, </span>
        </router-link>
    </nav>
</template>

<script>
export default {
    name: "TheNavigation",
    data: () => ({
        links: [
            { to: "/", name: "Home" },
            { to: "/about", name: "About" },
            { to: "/table", name: "Table" },
        ]
    })
};
</script>

<style lang="scss" scoped>
nav {
    padding: 30px;
    a {
        font-weight: bold;
        color: #2c3e50;
        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
