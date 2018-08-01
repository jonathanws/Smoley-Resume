import Vue from 'vue'
import Router from 'vue-router'

import Demos from '@/components/demos/Demos.vue'
import LandingPage from '@/components/landing-page/LandingPage'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'LandingPage',
			component: LandingPage
		},
		{
			path: '/demos',
			name: 'Demos',
			component: Demos
		}
	]
})
