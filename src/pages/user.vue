<template>
  <div>
    <div>我是userId: {{dynamicAttr}}</div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      id: 123
    }
  },
  computed: {
    dynamicAttr () {
      return this.$route.params.id
    }
  },
  watch: {
    $route (to, from) {
      console.log('to = ', to)
      console.log('from = ', from)
    }
  }
}
</script>
