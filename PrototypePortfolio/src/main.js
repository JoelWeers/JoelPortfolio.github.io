import { createApp } from 'vue'
import App from './App.vue'
import { createStore } from 'vuex';

import "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";

const Store = createStore({
    state: {
    registered: false,
},
    mutations: {
    RegisterNow(state) {
        state.registered = true;
    },
},
});

const app = createApp(App)

app.use(Store)

app.mount('#app')
