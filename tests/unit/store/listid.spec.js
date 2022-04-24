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
    describe( "The list state", () => {
        it("should exist", () => {
            const wrapper = shallowMount( Stub, { store, localVue });
            const { list } = wrapper.vm;
            strictEqual( Array.isArray(list), true );
        });
        it("can be created", async() => {
            const wrapper = shallowMount( Stub, { store, localVue });
            await wrapper.vm.GET_list();
            const has_item = wrapper.vm.list.length > 0;
            strictEqual( has_item, true );
        });
    });
    describe( "The route state", () => {
        it("should exist", () => {
            const wrapper = shallowMount( Stub, { store, localVue });
            const { route } = wrapper.vm;
            strictEqual( typeof(route), "string" );
        });
    });
});
