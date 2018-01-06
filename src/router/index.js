import Vue from 'vue'
import Router from 'vue-router'
import Find from 'components/find/find'
import Column from 'components/column/column'
import ColumnDetail from 'components/column-detail/column-detail'
import Drawer from 'components/drawer/drawer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/find'
    },
    {
      path: '/find',
      component: Find,
      children: [
        {
          path: 'drawer',
          component: Drawer
        }
      ]
    },
    {
      path: '/column',
      component: Column,
      children: [
        {
          path: ':id',
          name: 'columnDetail',
          component: ColumnDetail
        },
        {
          path: ':id',
          name: 'drawer',
          component: Drawer
        }
      ]
    }
  ]
})
