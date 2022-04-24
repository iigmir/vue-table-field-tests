import { strictEqual } from "assert";
import { shallowMount } from "@vue/test-utils";
import TheTable from "@/views/TableView/TheTable.vue";
import { BTable, BFormCheckbox } from "bootstrap-vue";

const components = { BTable, BFormCheckbox };

describe("TheTable.vue", () => {
    it("has two fields if go_actived is false", async() => {
        const wrapper = shallowMount(TheTable, {
            components,
            data: () => ({
                go_actived: false
            })
        });
        const fields = wrapper.vm.fields;
        strictEqual( fields.length, 2 );
    });
    it("has three fields if go_actived is true", async () => {
        const wrapper = shallowMount(TheTable, {
            components,
            data: () => ({
                go_actived: true
            })
        });
        const fields = wrapper.vm.fields;
        strictEqual( fields.length, 3 );
    });
    it("gets its fullname by methods", () => {
        const wrapper = shallowMount(TheTable, {
            components
        });
        const data = {
            isActive: false,
            age: 120,
            first_name: "Korea",
            last_name: "Republic of",
        };
        const name = wrapper.vm.get_name(data);
        const expected = "Korea, Republic of";
        strictEqual( name, expected );
    });
})
