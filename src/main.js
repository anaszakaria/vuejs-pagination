import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueJSPaginate from 'vuejs-paginate'

Vue.config.productionTip = false

Vue.component('paginate', VueJSPaginate)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
