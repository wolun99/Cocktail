<template>
	<div class="search_bar">
		<input type="text" v-model="search" />
		<button @click="SearchList()">Search</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			search: '',
		};
	},
	methods: {
		SearchList() {
			this.$store.commit('getSearchWord', this.search);
		},
	},
};
</script>

<style></style>
