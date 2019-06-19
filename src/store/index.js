import Vue from 'vue'
import Vuex from 'vuex'
import GlobalInfo from './modules/global.js'
import Tips from './modules/tips.js'
import Loader from './modules/loader.js'


Vue.use(Vuex)

const store = new Vuex.Store({
	//namespaced: true,
	modules: {
		globalInfo: GlobalInfo,
		tips: Tips,
		loader: Loader
	}
})

export default store