import { createStore } from 'vuex';

export default createStore({
	state: {
		searchWord: '',
		detailId: '',
	},
	getters: {},
	mutations: {
		getSearchWord(state, payload) {
			state.searchWord = payload;
		},
		getDetailId(state, payload) {
			state.detailId = payload;
		},
	},
	actions: {},
	modules: {},
});
