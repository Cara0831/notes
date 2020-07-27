<template>
  <div id="app">
    <MyHeader></MyHeader>
    <MyContent></MyContent>
    <MyContent></MyContent>
  </div>
</template>

<script>
import Header from './components/Header'
import Content from './components/Content'
import bottom from './components/bottom'

export default {
  name: 'app',
  data () {
    // return {
    //   msg: 'Welcome to Your Vue.js App'
    // }
  },
  components:{
    "MyHeader":Header,
    "MyContent":Content
  }
}
</script>

<style lang="scss">

</style>
