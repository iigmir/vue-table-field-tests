import { shallowMount, createLocalVue } from "@vue/test-utils";
import { strictEqual } from "assert";
import Vuex from "vuex";
import Stub from "./listid-stub.vue";
import listid from "@/store/modules/listid";

const localVue = createLocalVue()

localVue.use(Vuex);

describe("The listid vuex module", () => {
    let store;
    beforeEach( () => {
        store = new Vuex.Store({
            modules: {
                listid,
            },
        });
    });
    it("has the list state", () => {
        const wrapper = shallowMount( Stub, { store, localVue });
        const list = wrapper.vm.list;
        strictEqual( Array.isArray(list), true );
    });
    it("can create list", async() => {
        const wrapper = shallowMount( Stub, { store, localVue });
        await wrapper.vm.GET_list();
        const has_item = wrapper.vm.list.length > 0;
        strictEqual( has_item, true );
    });
});
