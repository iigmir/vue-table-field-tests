<template>
    <nav>
        <router-link
            v-for="({ to, name }) in links"
            v-bind:key="to"
            v-bind="{ to }"
        >
            {{ name }}
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
        ]
    })
};
</script>
