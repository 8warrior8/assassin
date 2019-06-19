const tipsStore = {
	state: {
		tipsObj: {
			title: "", //标题
			subTitle: "", //副标题
			infoList: [], //信息列表
			buttonText: "", //提交按钮文言
			updateTime: "" //更新or发布时间
		},
		isTipsVisible: false
	},
	getters: {
		getTipsObj: state => {
			return state.tipsObj;
		},
		getTipsVisible: state => {
			return state.isTipsVisible;
		}
	},
	mutations: {
		setTipsObj(state, obj) {
			state.tipsObj = obj;
		},
		setTipsVisible(state, obj) {
			state.isTipsVisible = obj;
		}
	},
	actions: {
		set_tipsObj({ commit }, obj) {
			commit('setTipsObj', obj);
		},
		set_tipsVisible({ commit }, obj) {
			commit('setTipsVisible', obj);
		}
	}
}

export default tipsStore
