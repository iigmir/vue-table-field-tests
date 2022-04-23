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
        ]
    })
};
</script>
