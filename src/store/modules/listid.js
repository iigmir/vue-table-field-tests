import ListData from "./example.json";

const AJAX = () => Promise.resolve( ListData );

export default {
    namespaced: true,
    state: {
        list: [],
        route: "",
    },
    getters: {
    },
    mutations: {
        SET_list(state, list = []) {
            state.list = list;
        },
    },
    actions: {
        GET_list({ commit }) {
            return new Promise( (resolve, reject) => {
                AJAX().then( (ajaxlist) => {
                    commit("SET_list", ajaxlist);
                    resolve(ajaxlist);
                }).catch( (error) => {
                    reject(error);
                });
            });
        }
    },
};
