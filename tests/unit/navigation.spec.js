import { shallowMount } from "@vue/test-utils";
import TheNavigation from "@/components/TheNavigation.vue";
import { strictEqual } from "assert";

describe( "TheNavigation.vue", () => {
    it( "has unique links", () => {
        const wrapper = shallowMount( TheNavigation, {
            stubs: ['router-link']
        });
        const links = wrapper.vm.links;
        const result = links.filter( (item, index, array) => {
            return array.indexOf(item.to) !== array.lastIndexOf(item.to)
        });
        strictEqual( result.length, 0 );
    })
})
