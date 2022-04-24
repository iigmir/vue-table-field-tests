import ListData from "./example.json";

const AJAX = () => Promise.resolve( ListData );

export default {
    namespaced: true,
    state: {
        list: []
    },
    getters: {
    },
    mutations: {
        SET_list(state, list = []) {
            state.list = list;
        }
    },
    actions: {
        GET_list({ commit }) {
            AJAX().then(
                (ajaxlist) => commit("SET_list", ajaxlist)
            );
        }
    },
};
