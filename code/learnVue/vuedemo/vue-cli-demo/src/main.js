import Vue from 'vue'
import App from './App.vue'
import Header from './components/header.vue'
import Content from './components/Content.vue'
import bottom from './components/bottom.vue'

Vue.component('MyHeader', Header);
Vue.component('MyContent', Content);
Vue.component('MyBottom', bottom);
new Vue({
    el: '#app',
    render: h => h(App)
})