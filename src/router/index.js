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
      components:{
        default:GoodsList,
        title:Title,
        image:Image,
        cart:Cart
      },
      children: [
        {
          path:'title',
          name:'Title',//命名路由
          component:Title
        },
        {
          path:'image',
          name:'Image',//命名路由
          component:Image
        }
      ],
    },
      {
        path:'/cart/:cartId',
        name:'Cart',//命名路由
        component:Cart
      }
  ]
})
