<template>
	<div class="skills box-shadow">
		<div>
			Hey there look at all of those skills, man. Hey there look at all of those skills, man. Hey there look at all of those skills, man. Hey there look at all of those skills, man.
		</div>

		<div>
			<Skill v-for="s in skills" v-bind:key="s.name" :name="s.name" :length="s.length" :percentage="s.percentage"></Skill>
		</div>
	</div>
</template>

<script>
import Skill from './Skill.vue';

export default {
	components: {
		Skill
	},
	data: function() {
		return {
			skills: [
				{ name: 'Javascript', length: '1 year', percentage: '70' },
				{ name: 'Angular.js', length: '1 year', percentage: '100' },
				{ name: 'Node.js', length: '1 year', percentage: '20' },
				{ name: 'Linux', length: '1 year', percentage: '85' },
				{ name: 'Full-Stack development', length: '1 year', percentage: '100' }
			]
		}
	}
}
</script>

<style lang="scss" scoped>
@import './styles/constants';
$spacing: 30px;

.skills {
	display: flex;
	background-color: white;
	padding: $spacing;
	font-size: 14px;
	>div {
		flex-basis: 50%;
		&:not(:first-child) {
			margin-left: $spacing / 2;
		}
		&:not(:last-child) {
			margin-right: $spacing / 2;
		}
	}
}
</style>
