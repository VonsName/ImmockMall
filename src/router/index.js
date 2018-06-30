import Vue from 'vue'
import Router from 'vue-router'
import GoodsList from '@/views/GoodsList'
import Title from  '@/views/Title'
import Image from  '@/views/Image'
import Cart from  '@/views/Cart'

Vue.use(Router);

export default new Router({
    routes: [
    {
      path: '/goods',
      name: 'GoodsList',
      component: GoodsList,
      children: [
        {
          path:'title',
          name:'Title',
          component:Title
        },
        {
          path:'image',
          name:'Image',
          component:Image
        }
      ],
    },
      {
        path:'/cart',
        name:'Cart',
        component:Cart
      }
  ]
})
