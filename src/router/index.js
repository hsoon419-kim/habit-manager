import Vue from 'vue'
import VueRouter from 'vue-router'
import Checklist from '../views/Checklist'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        { path: '/', redirect: '/checklist' },
        { path: '/checklist', component: Checklist }
    ]
})
