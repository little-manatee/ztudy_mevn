import Vue from 'vue'
import Router from 'vue-router'
import router from "@router/router";
import {} from "@validators";
import Main from "@pages/Main.vue";
import "@styles/main.css";
import TextInput from '@components/TextInput.vue'
import store from './store'

Vue.use(Router)

Vue.component('text-input', TextInput)

const app = new Vue({
    el: '#app',
    router,
    store,
    render: h => h(Main) 
})