<template>
	<div class="skills box-shadow">
		<div>
			Hey there look at all of those skills, man. Hey there look at all of those skills, man. Hey there look at all of those skills, man. Hey there look at all of those skills, man.
		</div>

		<div>
			<Skill v-for="s in skills" v-bind:key="s.name" :name="s.name" :length="getLength(s.length)" :percentage="s.percentage"></Skill>
		</div>
	</div>
</template>

<script>
import Skill from './Skill.vue';
import moment, { months } from 'moment';

export default {
	components: {
		Skill
	},
	data: function() {
		return {
			skills: [
				{ name: 'Javascript', length: [2017, 8, 1] },
				{ name: 'Angular.js', length: [2017, 8, 1] },
				{ name: 'Node.js', length: [2017, 8, 1] },
				{ name: 'Linux', length: [2013, 6, 1] },
				{ name: 'Full-Stack', length: [2014, 8, 1] }
			]
		}
	},
	created: function() {
		var maxMonths;
		var skill;

		for (skill of this.skills) {
			skill.numMonths = moment().diff(moment(skill.length), 'months');
			
			if (maxMonths === undefined || skill.numMonths > maxMonths) {
				maxMonths = skill.numMonths;
			}
		}

		for (skill of this.skills) {
			skill.percentage = skill.numMonths / maxMonths * 100;
		}
	},
	methods: {
		getLength(m) {
			var diff = '';
			var numMonths = moment().diff(moment(m), 'months');

			if (numMonths > 11) {
				var numYears = Math.floor(numMonths / 12);
				diff = numYears + (numYears > 1 ? ' years' : ' year');

				var extraMonths = numMonths % 12;
				if (extraMonths > 0) {
					diff += ', ' + extraMonths + ' ' + (extraMonths > 1 ? 'months' : 'month');
				}
			} else {
				diff += numMonths + ' ' + (numMonths > 1 ? ' months' : ' month');
			}

			return diff;
		},
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
