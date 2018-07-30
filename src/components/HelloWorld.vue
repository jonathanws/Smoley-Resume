<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
		<h2>Essential Links</h2>
		
		<ul>
			<li>
				<a href="https://vuejs.org" target="_blank">Core Docs</a>
			</li>
			<li>
				<a href="https://forum.vuejs.org" target="_blank">Forum</a>
			</li>
			<li>
				<a href="https://chat.vuejs.org" target="_blank">Community Chat</a>
			</li>
			<li>
				<a href="https://twitter.com/vuejs" target="_blank">Twitter</a>
			</li>
			<br>
			<li>
				<a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a>
			</li>
		</ul>
		
		<h2>Ecosystem</h2>
		
		<ul>
			<li>
				<a href="http://router.vuejs.org/" target="_blank">vue-router</a>
			</li>
			<li>
				<a href="http://vuex.vuejs.org/" target="_blank">vuex </a>
			</li>
			<li>
				<a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a>
			</li>
			<li>
				<a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a>
			</li>
		</ul>

		<div style="display: flex;">
			<div class="sq yellow"></div>
			<div class="sq coral"></div>
			<div class="sq light-blue"></div>
			<div class="sq blurple"></div>
			<div class="sq navy-blue"></div>
		</div>
	</div>
</template>

<script>
export default {
	name: "HelloWorld",
	data() {
		return {
			msg: "Welcome to Your Vue.js App"
		};
	}
};
</script>

<!--
	Color scheme

	yellow		#f8e9a1
	coral		#f76c6c
	light blue	#a8d0e6
	blurple		#374785
	navy blue	#24305e
-->
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
	font-weight: normal;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
.sq {
	margin: 8px;
	height: 50px;
	width: 50px;
	border: 1px solid black;
}
.yellow {
	background-color: #f8e9a1;
}
.coral {
	background-color: #f76c6c;
}
.light-blue {
	background-color: #a8d0e6;
}
.blurple {
	background-color: #374785;
}
.navy-blue {
	background-color: #24305e;
}
</style>
