<template>
  <div>
      {{id}}
      玩具
  </div>
</template>

<script>
export default {
    name:"TLProdects.vue",
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
