const globalStore = {
	state: {
		globalInfo: {
			// 路由的背景色 全屏状态下
			contentInfo: {
				opacity: '0.9',
				bgcolor: 'rgb(7, 17, 27)',
				type: 'radial-gradient-ellipse'
			},
			isHigher768: false,
			showBingImage: true
		},
		userInfo: null
	},
	getters: {
		getGlobalInfo: state => state.globalInfo,
		getUserInfo: state => state.userInfo
	},
	mutations: {
		setGlobalInfo (state, obj) {
			state.globalInfo = obj.data
		},
		setUserInfo (state, obj) {
			state.userInfo = obj.data
		}
	},
	actions: {
		set_GlobalInfo ({commit}, obj) {
			commit('setGlobalInfo', obj)
		},
		set_UserInfo ({commit}, obj) {
			commit('setUserInfo', obj)
		}
	}
}

export default globalStore
