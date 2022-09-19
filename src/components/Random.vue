<template>
	<div>
		<div class="detail_wrap">
			<div>
				<div class="detailImgCard">
					<img :src="list.strDrinkThumb" alt="" />
				</div>
			</div>
			<div class="detailContent">
				<h4>Drink : {{ list.strDrink }}</h4>
				<h6>Category : {{ list.strCategory }}</h6>
				<p>Alcoholic : {{ list.strAlcoholic }}</p>
				<p>Glass : {{ list.strGlass }}</p>
				<p>Instructions : {{ list.strInstructions }}</p>
			</div>
		</div>
	</div>
</template>

<script>
import { getRandom } from '@/api/index';
export default {
	name: 'RandomComponent',
	data() {
		return {
			list: [],
		};
	},
	methods: {
		async getRandomList() {
			const { data } = await getRandom();
			this.list = data.drinks;
			this.list.forEach(list => {
				this.list = list;
			});
		},
	},
	mounted() {
		this.getRandomList();
	},
};
</script>

<style scoped>
.detail_wrap {
	margin-top: 150px;
}
</style>
