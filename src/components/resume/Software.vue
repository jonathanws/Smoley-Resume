<template>
	<div class="software">
		<div class="software-list">
			<div v-for="(s, index) in software" v-bind:key="index" class="box-shadow">
				<img v-if="s.asset" :src="s.asset">
				<span>{{s.name}}</span>
			</div>
		</div>

		<div class="notables-list">
			<div v-for="(n, index) in notables" v-bind:key="index" v-if="index < (page * chunk)" class="box-shadow">{{n}}</div>
		</div>

		<a v-if="(page * chunk) < notables.length" @click="page += 1">See More</a>
	</div>
</template>

<script>

export default {
	name: 'Software',
	data: function() {
		return {
			software: [
				{ name: 'NPM', asset: require('../../assets/software-npm.png') },
				{ name: 'Bower', asset: require('../../assets/software-bower.png') },
				{ name: 'GIT', asset: require('../../assets/software-git.png') },
				{ name: 'Java', asset: require('../../assets/software-java.png') },
				{ name: 'VS Code', asset: require('../../assets/software-vscode.png') },
				{ name: 'Bash', asset: '' },
				{ name: 'Vim', asset: require('../../assets/software-vim.png') },
				{ name: 'CentOS', asset: require('../../assets/software-centos.png') }
			],
			notables: [
				'Eclipse',
				'Android Studio',
				'Ubuntu',
				'SVN',
				'SQL',
				'Microsoft Office',
				'Eclipse',
				'Maven',
				'Android Studio',
				'Gradle',
				'Notepad++',
				'Sublime Text',
				'Inkscape',
				'Scrum, Agile, & Waterfall methodologies',
				'Android SDK'
			],
			chunk: 6,
			page: 0
		}
	},
	created: function() {
		console.log('well hello there');
	}
}
</script>

<style lang="scss" scoped>
@import 'styles/constants';

.software-list, .notables-list {
	box-sizing: border-box;
	display: flex;
	flex-wrap: wrap;
	div {
		background-color: white;
		box-sizing: border-box;
	}
}

.software-list {
	justify-content: space-around;
	margin-bottom: 8px;
	div {
		flex: 1 0 22%;
		margin: 8px;
		display: flex;
		flex-direction: column;
		span {
			align-items: center;
			justify-content: center;
			display: flex;
			height: 50px;
			font-weight: 600;
			color: $accent-color;
		}
		&:hover {
			span {
				color: white;
				background-color: $accent-color;
			}
		}
	}
}
.notables-list {
	padding: 0 4px;
	div {
		flex-grow: 1;
		flex-basis: 45%;
		padding: 12px 36px;
		margin: 4px;
		&:hover {
			color: $accent-color;
			font-weight: 600;
		}
	}
}

img {
	max-width: 50px;
	align-self: center;
	margin: 20px 0;
}

a {
	display: block;
	color: $accent-color;
	text-align: center;
	font-weight: 600;
	text-decoration: none;
	padding: 16px;
	&:hover {
		text-decoration: underline;
		cursor: pointer;
	}
}
</style>