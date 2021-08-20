import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		listData: [],
		number: 0,
		bool:true,
	},
	mutations: {
		addList(state, item) {
			//添加购物车列表
			let data = state.listData;
			if (data.length === 0) {
				data.push(item);
			} else {
				state.bool = true;
				data.forEach((val) => {
					if (val.id == item.id) { //点击相同商品执行
						console.log(1);
						val.number++;
						// state.listData[state.listData.indexOf(val)].number = val.number+1
						state.bool = false;
						// console.log(data);
					}
				});

				if (state.bool) { //点击不同商品执行
					data.push(item);
				}
			}
		},
		numList(state) {
			//购物车列表数量
			let number = 0;
			state.listData.forEach((item) => {
				number += item.number;
			});
			state.number = number;
		},
		addNumber(state, id) {
			//增加商品数量
			let data = state.listData;
			data.forEach((item) => {
				if (item.id == id) {
					if (item.number >= 100) {
						item.number = 100;
					} else {
						item.number++;
					}
				}
			});
		},
		subNumber(state, id) {
			//减少商品数量
			let data = state.listData;
			data.forEach((item) => {
				if (item.id == id) {
					if (item.number <= 1) {
						item.number = 1;
					} else {
						item.number--;
					}
				}
			});
		},
		delete(state, id) {
			//删除购物车对应商品
			let data = state.listData;
			data.forEach((item) => {
				if (item.id == id) {
					data.splice(data.indexOf(item), 1);
				}
			});
		},
		changeState(state, id) {
			let data = state.listData;
			data.forEach((item) => {
				if (item.id == id) {
					item.state = !item.state;
				}
			});
		},
	},
	actions: {
		add({ commit }, item) {
			commit('addList', item);
			commit('numList');
		},
		del({ commit }, id) {
			commit('delete', id);
			commit('numList');
		},
		addNum({ commit }, id) {
			commit('addNumber', id);
			commit('numList');
		},
		subNum({ commit }, id) {
			commit('subNumber', id);
			commit('numList');
		},
		changeSt({ commit }, id) {
			commit('changeState', id);
		},
	},
	modules: {},
	getters: {},
});
