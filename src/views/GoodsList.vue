<template>
    <div>
        商品页面
      <span>{{$route.params.goodId}}</span>
      <router-link to="/goods/title">商品标题</router-link>
      <router-link to="/goods/image">商品图片</router-link>
      <router-link to="/cart">购物车页面</router-link>
      <button @click="jump">跳转到购物车</button>
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
           //this.$router.push('/cart')
           this.$router.push({path:'/cart?goodsId=123'})
         }
      }
    }
</script>

<style scoped>

</style>
