<template>
	<div class="skill">
		<div class="title-and-length">
			<span>{{name}}</span>
			<span>{{length}}</span>
		</div>
		<div class="progress-bar">
			<div :style="{ 'flex-basis': percentage + '%' }"></div>
			<div :style="{ 'flex-basis': (100 - percentage) + '%' }"></div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Skill',
	props: ['length', 'name', 'percentage']
}
</script>

<style lang="scss" scoped>
	@import './styles/constants';
	$bar-height: 3px;

	.skill {
		display: flex;
		flex-direction: column;
		padding: 4px;
		.title-and-length {
			display: flex;
			justify-content: space-between;
			margin-bottom: 4px;
		}
		.progress-bar {
			display: flex;
			div {
				height: $bar-height;
			}
			div:nth-child(1) {
				background-color: $accent-color;
				border-top-left-radius: $bar-height;
				border-bottom-left-radius: $bar-height;
			}
			div:nth-child(2) {
				background-color: #ddd;
				border-top-right-radius: $bar-height;
				border-bottom-right-radius: $bar-height;
			}
		}
	}
</style>
