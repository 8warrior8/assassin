const loaderStore = {
	state: {
		isLoaderVisible: false
	},
	getters: {
		getLoaderVisable: state => {
			return state.isLoaderVisible;
		}
	},
	mutations: {
		setLoaderVisible (state, obj) {
			state.isLoaderVisible = obj;
		}
	},
	actions: {
		set_loaderVisable ({commit}, obj) {
			commit('isetLoaderVisible', obj);
		}
	}
}

export default loaderStore
