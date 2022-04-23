<template>
    <b-container class="table">
        <h1>{{ title }}</h1>
        <the-table />
    </b-container>
</template>

<script>
import TheTable from "./TheTable.vue";

export default {
    name: "TableView",
    components: {
        TheTable
    },
    data: () => ({
        title: "Hello"
    })
}
</script>
