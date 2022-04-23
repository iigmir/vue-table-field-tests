import { strictEqual } from "assert";
import { shallowMount } from "@vue/test-utils"
import TheTable from "@/views/TableView/TheTable.vue";

describe("TheTable.vue", () => {
    it("renders props.msg when passed", () => {
        const wrapper = shallowMount(TheTable);
        const fields = wrapper.vm.fields;
        strictEqual( fields.length, 3 );
    })
})
