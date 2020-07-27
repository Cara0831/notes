<template>
  <div>
      {{id}}
      手机
  </div>
</template>

<script>
export default {
    name:"PhoneProdects.vue",
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
