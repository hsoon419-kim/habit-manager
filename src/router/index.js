import Vue from 'vue'
import VueRouter from 'vue-router'
import Checklist from '../views/Checklist'
import History from '../views/History'
import Summary from '../views/Summary'
import Analysis from '../views/Analysis'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        { path: '/', redirect: '/checklist' },
        { path: '/checklist', component: Checklist },
        { path: '/history', component: History },
        { path: '/summary', component: Summary },
        { path: '/analysis', component: Analysis }
    ]
})
