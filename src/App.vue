<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<!--
	Color scheme

	yellow      #f8e9a1
	coral       #f76c6c
	light blue  #a8d0e6
	blurple     #374785
	navy blue   #24305e
-->
<style>
html {
  background-color: #a8d0e6;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
