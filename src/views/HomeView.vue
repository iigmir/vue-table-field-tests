<template>
    <b-container class="home">
        <div>
            <img alt="Vue logo" src="../assets/logo.png">
            <HelloWorld msg="Welcome to Your Vue.js App"/>
        </div>
    </b-container>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue"

export default {
    name: "HomeView",
    components: {
        HelloWorld
    },
};
</script>
