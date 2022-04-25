import vue from 'vue';
import Vuex from 'vuex';

vue.use(Vuex);

const state = {
    registered: false,
}

const mutations = {
    RegisterNow(state) {
        state.registered = true;
    },
}

// Create a new store instance.
export default new Vuex.Store({
    state,
    mutations,
})