import { shallowMount } from "@vue/test-utils";
import TheNavigation from "@/components/TheNavigation.vue";
import { strictEqual } from "assert";

describe( "TheNavigation.vue", () => {
    it( "has unique links", () => {
        const wrapper = shallowMount( TheNavigation, {
            stubs: ['router-link']
        });
        const links = wrapper.vm.links.map( ({ to }) => to );
        const result = links.filter( (item, index, array) => {
            return array.indexOf(item) !== array.lastIndexOf(item)
        });
        strictEqual( result.length, 0 );
    })
})
