<template>
  <div class="the-table">
    <p>
        <b-form-checkbox v-model="age_actived">
            <span class="pl-1">
                {{ age_actived ? "Disable" : "Enable" }} age
            </span>
        </b-form-checkbox>
    </p>
    <b-table striped hover v-bind="{ items, fields }">
        <template #cell(name)="data">
            {{ get_name(data.item) }}
        </template>
        <template #table-caption>Below table.</template>
    </b-table>
  </div>
</template>

<script>
export default {
    name: "TheTable",
    data: () => ({
        items: [
            {
                isActive: true,
                age: 40,
                first_name: "Dickerson",
                last_name: "Macdonald",
            },
            {
                isActive: false,
                age: 21,
                first_name: "Larsen",
                last_name: "Shaw",
            },
            {
                isActive: false,
                age: 89,
                first_name: "Geneva",
                last_name: "Wilson",
            },
            {
                isActive: true,
                age: 38,
                first_name: "Jami",
                last_name: "Carney",
            },
        ],
        age_actived: false,
    }),
    computed: {
        /**
         * Note `isActive` is left out and will not appear in the rendered table
         */
        fields() {
            return [
                {
                    key: "name",
                    sortable: false
                },
                {
                    key: "age",
                    label: "Person age",
                    sortable: true,
                    // Variant applies to the whole column, including the header and footer
                    // variant: "danger"
                }
            ];
        },
    },
    methods: {
        get_name({ first_name, last_name }) {
            return `${first_name}, ${last_name}`;
        }
    }
};
</script>

<style scoped>
.pl-1 {
    padding-left: 1rem;
}
</style>
