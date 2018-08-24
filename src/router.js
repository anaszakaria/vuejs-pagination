import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import SimplePaginate from './views/SimplePaginate.vue'
import AdvancedPaginate from './views/AdvancedPaginate.vue'
import VueJSPaginate from './views/VueJSPaginate.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/simplepaginate',
            name: 'simplepaginate',
            component: SimplePaginate
        },
        {
            path: '/advancedpaginate',
            name: 'advancedpaginate',
            component: AdvancedPaginate
        },
        {
            path: '/vuejspaginate',
            name: 'vuejspaginate',
            component: VueJSPaginate
        }
    ]
})
