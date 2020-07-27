<template>
  <div>
      {{id}}
      家电
  </div>
</template>

<script>
export default {
    name:"TCProdects.vue",
  data () {
    return {
        id:this.$route.params.id
    }
  },
  methods: {

  },
  components: {

  }
}
</script>

<style scoped>

</style>
