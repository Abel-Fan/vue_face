<template>
  <div id="app">
    <router-view/>
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
  width: 100%;
  height: 100%;
}
  html , body{
    background-color: #f4f4f4;
    overflow: hidden;
    width: 100%;
    height: 100%;
  }
  *{
    margin: 0;
    padding: 0;
    list-style: none;
  }
</style>
