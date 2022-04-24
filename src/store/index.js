import Vue from "vue"
import Vuex from "vuex"
import listid from "./modules/listid.js";

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        listid
    }
})
