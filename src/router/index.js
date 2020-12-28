import Vue from 'vue'
import VueRouter from 'vue-router'
import Checklist from '../views/Checklist'
import History from '../views/History'
import Dashboard from '../views/Dashboard'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        { path: '/', redirect: '/checklist' },
        { path: '/checklist', component: Checklist },
        { path: '/history', component: History },
        { path: '/dashboard', component: Dashboard }
    ]
})
