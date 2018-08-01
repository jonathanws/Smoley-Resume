<template>
	<div class="landing-page light-blue-background-color">
		<div class="main-view">
			<hero></hero>
		</div>
		<div class="side-view">
			<resume></resume>
			<demos></demos>
		</div>
	</div>
</template>

<script>
import Demos from './Demos.vue'
import Hero from './Hero.vue'
import Resume from './Resume.vue'

export default {
	components: {
		Demos, Hero, Resume
	},
	name: 'LandingPage'
}
</script>

<style lang="scss" scoped>
@import '../../variables';

.landing-page {
	display: flex;
	flex-direction: column;
}

/* Non-mobile styles */
@media screen and (min-width: 768px) {
	.landing-page {
		display: flex;
		flex-direction: row;
		height: 100%;
	}
	.main-view {
		flex-basis: 67%;
	}
	.side-view {
		flex-basis: 33%;
		display: flex;
		flex-direction: column;
		>div {
			flex: 1;
		}
	}
}

/* Super large styles (4k) */
@media screen and (min-width: 2000px) {
	* {
		font-size: 32px;
	}
}


// /* Extra small devices (phones, 600px and down) */
// @media only screen and (max-width: 600px) {...} 

// /* Small devices (portrait tablets and large phones, 600px and up) */
// @media only screen and (min-width: 600px) {...} 

// /* Medium devices (landscape tablets, 768px and up) */
// @media only screen and (min-width: 768px) {...} 

// /* Large devices (laptops/desktops, 992px and up) */
// @media only screen and (min-width: 992px) {...} 

// /* Extra large devices (large laptops and desktops, 1200px and up) */
// @media only screen and (min-width: 1200px) {...}
</style>

