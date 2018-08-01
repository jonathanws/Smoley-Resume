<template>
	<div class="demos-page navy-blue-background-color">
		<!-- <span style="text-align: center;">well hello there</span> -->

		<div class="header">
			<span class="logo" @click="toggleMenu">logo</span>
		</div>

		<div class="body">
			<TodoList></TodoList>
		</div>
	</div>
</template>

<script>
import TodoList from './todolist.vue'

export default {
	components: {
		TodoList
	},
	name: 'Demos',
	methods: {
		toggleMenu: function(event) {
			alert('hey');
		}
	}
}
</script>

<style lang="scss" scoped>
@import '../../variables';

.demos-page {
	color: white;
	.header {
		display: flex;
		height: 64px;
		padding: 0 30px;
		.logo {
			display: flex;
			align-items: center;
		}
	}
}
</style>

