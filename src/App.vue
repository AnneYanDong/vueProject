<template>
  <div id="app">
    <div><router-link to="/home">toHome</router-link></div>
    <div><router-link to="/about">toAbout</router-link></div>
    <div><router-link to="/user/123">user123</router-link></div>
    <div><router-link to="/user/456">user456</router-link></div>
    
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
