import Vue from 'vue'
import Router from 'vue-router'
import router from "@router/router";
import {} from "@validators";
import Main from "@pages/Main.vue";
import "@styles/main.css";
import TextInput from '@components/TextInput.vue'

Vue.use(Router)

Vue.component('text-input', TextInput)

const app = new Vue({
    el: '#app',
    router,
    render: h => h(Main) 
})