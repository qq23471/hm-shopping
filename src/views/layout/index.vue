<template>
    <div>
  <router-view></router-view>
  <van-tabbar  active-color="#ee0a24" inactive-color="#000" route>
  <van-tabbar-item to="/home" icon="wap-home">首页</van-tabbar-item>
  <van-tabbar-item to="/category" icon="apps-o">分类页</van-tabbar-item>
  <van-tabbar-item to="/cart" icon="shopping-cart-o">购物车</van-tabbar-item>
  <van-tabbar-item to="/user" icon="user-o">我的</van-tabbar-item>
</van-tabbar></div>
</template>

<script>
export default {
  name: 'LayoutIndex'
}
</script>

<style>

</style>
