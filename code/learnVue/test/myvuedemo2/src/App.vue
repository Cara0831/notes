<template>
  <div id="app">
    <div class="container">
      <!-- <span>
        <router-link to='/Home'>首页</router-link>
      </span>
      <span>
        <router-link to='/Products'>商品列表</router-link>
      </span> -->
      <div class="row">
        <ul class="nav nav-tabs">
        <li role="presentation"><router-link to='/Home'>首页</router-link></li>
        
        <li role="presentation"><router-link to='/TCProducts/1'>家电</router-link></li>
                <li role="presentation"><router-link to='/PhoneProducts/2'>手机</router-link></li>
                <li role="presentation"><router-link to='/TLProducts/3'>玩具</router-link></li>
        <!-- <li role="presentation"><a href="#">Messages</a></li> -->
      </ul>
      </div>
      <div class="row" id="rv">

      </div>
      <router-view></router-view>
   </div>
    
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      // msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
  #rv{
    border: 1px solid red;
  }
</style>
