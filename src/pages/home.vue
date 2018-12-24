<template>
  <div>
    <div>home</div>
    <div>{{homeMsg}}</div>
    <div>
      <router-link to="/home/phone">toHomePhone</router-link>
      <router-link to="/home/applet">toHomeApplet</router-link>
      <router-link to="/home/computer">toHomeComputer</router-link>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      homeMsg: '我是home'
    }
  }
}
</script>
<style>

</style>

