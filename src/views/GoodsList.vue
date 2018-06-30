<template>
    <div>
        商品页面
      <span>{{$route.params.goodId}}</span>
      <router-link to="/goods/title">商品标题</router-link>
      <router-link to="/goods/image">商品图片</router-link>
      <router-link to="/cart">router购物车页面</router-link>
      <router-link v-bind:to="{name:'Cart',params:{cartId:123}}">命名路由购物车页面</router-link>
      <button @click="jump">button跳转到购物车</button>
      <div>
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
    export default {
       data(){
         return{
           msg:'hello vue'
         }
       },
      methods:{
         jump(){

           /**
            * 编程式路由
            */
           //this.$router.push('/cart')
           this.$router.push({path:'/cart?goodsId=123'})
         }
      }
    }
</script>

<style scoped>

</style>
