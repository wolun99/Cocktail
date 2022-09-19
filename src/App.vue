<template>
	<div>
		<nav>
			<div class="inner">
				<router-link to="/" class="main_logo" @click="searchMain()"
					>COCKTAIL</router-link
				>
				<div class="menu">
					<router-link to="/" @click="searchMain()">Name</router-link>
					<router-link to="/random">Random Cocktail</router-link>
				</div>
			</div>
		</nav>
		<div class="inner">
			<SearchBar></SearchBar>
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue';
export default {
	name: 'App',
	components: {
		SearchBar,
	},
	methods: {
		searchMain() {
			this.$store.commit('getSearchWord', '');
		},
	},
};
</script>

<style>
@import './assets/css/main.css';
</style>
