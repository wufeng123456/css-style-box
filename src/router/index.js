import Vue from 'vue'
import Router from 'vue-router'
import views from 'views'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'view',
      component: views
    }
  ]
})
