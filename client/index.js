import Vue from 'vue'
import Router from 'vue-router'
import router from "@router/router";
import {} from "@validators";
import Main from "@pages/Main.vue";
import "@styles/main.css";
import Button from '@components/Button.vue'
import Loader from '@components/Loader.vue'
import TextInput from '@components/TextInput.vue'
import store from './store'

Vue.use(Router)

Vue.component('btn', Button)
Vue.component('loader', Loader)
Vue.component('text-input', TextInput)

const app = new Vue({
    el: '#app',
    router,
    store,
    render: h => h(Main) 
})