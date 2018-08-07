<template>
	<div id="app">
		<router-view/>
	</div>
</template>

<script>

export default {
	name: "App"
}
</script>

<style>
html, body {
	margin: 0;
	height: 100%;
}
#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	height: 100%;
}

h1,
h2,
h3,
h4,
h5 {
	font-family: 'Signika', sans-serif;
}

p,
span {
	font-family: 'Lato', sans-serif;
}

.box-shadow {
	box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
}
</style>
