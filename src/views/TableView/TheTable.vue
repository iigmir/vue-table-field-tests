<template>
    <div class="the-table">
        <p>Below tbale</p>
        <b-table striped hover v-bind="{ items, fields }">
            <!--  -->
        </b-table>
    </div>
</template>

<script>
export default {
    name: "TheTable",
    data: () => ({
        items: [
          { isActive: true, age: 40, first_name: "Dickerson", last_name: "Macdonald" },
          { isActive: false, age: 21, first_name: "Larsen", last_name: "Shaw" },
          { isActive: false, age: 89, first_name: "Geneva", last_name: "Wilson" },
          { isActive: true, age: 38, first_name: "Jami", last_name: "Carney" }
        ]
    }),
    computed: {
        fields() {
            return [];
        },
    }
}
</script>
