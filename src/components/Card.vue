<template>
	<div>
		<div class="cardWrap" v-for="list in lists" :key="list">
			<img :src="list.strDrinkThumb" alt="" />
			<h4>{{ list.strDrink }}</h4>
			<p>{{ list.strCategory }}</p>
			<span>{{ list.strAlcoholic }}</span>
			<button
				@click="
					$store.commit('getDetailId', list.idDrink);
					goDetailPage();
				"
			>
				detail
			</button>
		</div>
	</div>
</template>

<script>
import { listGet } from '@/api/index';
export default {
	name: 'CockCard',
	data() {
		return {
			lists: {},
			search: 'a',
		};
	},
	computed: {
		checkSearchWord() {
			return this.$store.state.searchWord;
		},
	},
	watch: {
		checkSearchWord() {
			this.searchList();
			this.getList();
		},
	},
	methods: {
		async getList() {
			const { data } = await listGet(this.search);
			this.lists = data.drinks;
		},
		searchList() {
			if (this.$store.state.searchWord == '') {
				this.search = 'a';
			} else {
				this.search = this.$store.state.searchWord;
			}
		},
		goDetailPage() {
			this.$router.push('/detail/' + this.$store.state.detailId);
		},
	},
	mounted() {
		this.getList();
	},
};
</script>

<style></style>
