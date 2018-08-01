<template>
	<div class="todo-list" style="background-color: teal;">
		<p class="explanation">Lorem Ipsum</p>
		<input v-model="text" placeholder="New todo" @keydown.enter="addTodo">

		<ul v-if="todos.length">
			<li v-for="(todo, index) in todos" :key="index">
				{{todo}} - {{index}}
				<button @click="removeTodo(index)"></button>
			</li>
		</ul>
	</div>
</template>

<script>

export default {
	name: 'TodoList',
	data: function() {
		return {
			text: '',
			todos: []
		}
	},
	methods: {
		addTodo() {
			if (this.text.trim()) {
				this.todos.push(this.text);
				this.text = '';
			}
		},
		removeTodo(index) {
			this.todos.splice(index, 1)
		}
	}
}
</script>

<style lang="scss" scoped>
@import '../../variables';

.todo-list {
	padding: 20px;
	input {
		width: 100%;
	}
}
</style>

