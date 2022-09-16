<template>
	<div>
		<button @click="mainGo()" class="main_btn">back</button>
		<div class="detail_wrap">
			<div>
				<div class="detailImgCard">
					<img :src="content.strDrinkThumb" alt="" />
				</div>
			</div>
			<div class="detailContent">
				<h4>Drink : {{ content.strDrink }}</h4>
				<h6>Category : {{ content.strCategory }}</h6>
				<p>Alcoholic : {{ content.strAlcoholic }}</p>
				<p>Glass : {{ content.strGlass }}</p>
				<p>Instructions : {{ content.strInstructions }}</p>
			</div>
		</div>
	</div>
</template>

<script>
import { detailGet } from '@/api/index';

export default {
	name: 'DetailPage',
	data() {
		return {
			content: [],
		};
	},
	methods: {
		async getContent() {
			const { data } = await detailGet(this.$route.params.id);
			this.content = data.drinks;
			this.content.forEach(drink => {
				this.content = drink;
			});
		},
		mainGo() {
			this.$router.go(-1);
		},
	},
	mounted() {
		this.getContent();
	},
};
</script>

<style></style>
