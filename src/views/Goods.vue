<template>
	<div>
		<div class="box" v-for="item in gData" :key="item.id">
			<img src="../assets/shouji.jpg" />
			<h3>{{ item.name }}</h3>
			<p class="txt">{{ item.desc }}</p>
			<p>￥{{ item.price }}</p>
			<div class="addbox">
				<span>收藏</span>
				<span @click="gwBtn(item)">加入购物车</span>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			gData: this.$store.state.listData,
		};
	},
	methods: {
		gwBtn(item) {
			item.number = 1;
			item.state = true;
			this.$store.dispatch('add', item);
		},
	},
	beforeCreate() {
		this.$axios
			.post('http://8.130.175.54:8003/getAllGoods')
			.then((data) => {
				this.gData = data.data;
			})
			.catch((err) => console.log(err));
	},
};
</script>

<style>
.box {
	border: 1px solid red;
	width: 300px;
	height: 400px;
	float: left;
	border-radius: 3px;
	margin: 5px;
}

img {
	width: 100%;
}

.addbox {
	width: 100%;
}

.addbox span {
	border: 1px solid red;
	width: 50%;
	display: inline-block;
}

.txt {
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
	overflow: hidden;
}
</style>
