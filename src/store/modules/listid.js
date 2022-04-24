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
        set_list(state, list = []) {
            state.list = list;
        },
        set_route(state, route = "") {
            state.route = route.trim();
        },
    },
    actions: {
        GET_list({ commit }) {
            return new Promise( (resolve, reject) => {
                AJAX().then( (ajaxlist) => {
                    commit("set_list", ajaxlist);
                    resolve(ajaxlist);
                }).catch( (error) => {
                    reject(error);
                });
            });
        },
        SET_listid({ dispatch, commit }, route) {
            return new Promise( (resolve, reject) => {
                dispatch("GET_list").then( () => {
                    commit("set_route", route);
                    resolve();
                }).catch( (error) => {
                    reject(error);
                });
            });
        }
    },
};
