<template>
	<div>
		<div
			v-for="item in this.$store.state.listData"
			:key="item.id"
			class="cartList"
		>
			{{ item }}
			<div class="cartBox">
				<input
					v-if="item.state"
					type="checkbox"
					checked
					@change="cState(item.id)"
				/>
				<input v-else type="checkbox" @change="cState(item.id)" />
				<span>单价:￥{{ item.price }}</span>
				<button @click="sub(item.id)">-</button>
				<input class="cartTxt" type="text" :value="item.number" />
				<button @click="add(item.id)">+</button>
				<span v-html="'小计:￥' + item.number * item.price"></span>
				<span>操作:</span>
				<button @click="del(item.id)">删除</button>
			</div>
		</div>
		<div class="cartAll">
			<span>全选 <input type="checkbox" v-model="bool"/></span>
			<span>总价:￥{{ z_number }}</span>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			bool: false,
		};
	},
	methods: {
		add(id) {
			this.$store.dispatch('addNum', id);
			// !手动 强制更新组件
			// {store：{state：{}}}
            this.$forceUpdate();
            
		},
		sub(id) {
			this.$store.dispatch('subNum', id);
			this.$forceUpdate();
		},
		del(id) {
			this.$store.dispatch('del', id);
		},
		cState(id) {
			this.$store.dispatch('changeSt', id);
			this.$forceUpdate();
		},
	},
	computed: {
		z_number() {
			let data = this.$store.state.listData;
			let zz = 0;
            data.forEach(item => zz += item.number * item.price)
			return zz;
		},
	},
	watch: {},
	updated() {
		
	},
};
</script>
<style>
.cartList {
	border: 5px solid red;
	margin-top: 10px;
	border-radius: 6px;
}
.cartBox {
	margin-top: 10px;
}
.cartBox button {
	width: 50px;
	margin: 0 5px;
	border: 1px solid;
	border-radius: 3px;
}
.cartBox span {
	margin: 0 25px;
}
.cartTxt {
	width: 50px;
	text-align: center;
}

.cartAll {
	margin-top: 10px;
}
.cartAll span {
	margin: 0 10px;
	font-size: 20px;
}
</style>
