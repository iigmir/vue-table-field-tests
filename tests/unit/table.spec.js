import { strictEqual } from "assert";
import { shallowMount } from "@vue/test-utils";
import TheTable from "@/views/TableView/TheTable.vue";
import { BTable } from "bootstrap-vue";

describe("TheTable.vue", () => {
    it("has three fields", () => {
        const wrapper = shallowMount(TheTable, {
            components: { BTable }
        });
        const fields = wrapper.vm.fields;
        strictEqual( fields.length, 3 );
    });
})
