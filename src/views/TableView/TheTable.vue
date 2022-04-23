<template>
  <div class="the-table">
    <p>
        <b-form-checkbox v-model="go_actived">
            <span class="pl-1">
                {{ go_actived ? "Disable" : "Enable" }} active value
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
        go_actived: false,
    }),
    computed: {
        keys() {
            const actived_option = this.go_actived ? ["isActive"] : [];
            return [
                "name",
                "age",
                ...actived_option,
            ];
        },
        /**
         * Note `isActive` is left out and will not appear in the rendered table
         */
        fields() {
            const labels = {
                "age": "Person age",
                "isActive": "ACTIVED",
            };
            const no_sorts = [
                "name",
            ];
            const result = this.keys.map( key => {
                const sortable = no_sorts.includes(key) === false;
                const label = labels[key] ?? key;
                return {
                    key,
                    label,
                    sortable
                };
            });
            return result;
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
