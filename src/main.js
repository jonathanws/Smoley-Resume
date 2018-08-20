// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// font awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import { faGoogleDrive } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faGithubAlt, faGoogleDrive, faInstagram, faLinkedinIn, faTwitter)
Vue.component('font-awesome-icon', FontAwesomeIcon)

// typefaces
import 'font-proxima-nova/fonts/ProximaNova-Regular.ttf'
import 'font-proxima-nova/style.css'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: {
		App
	},
	template: '<App/>'
})
