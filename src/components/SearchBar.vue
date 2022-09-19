<template>
	<div class="search_bar">
		<div class="input_wrap">
			<input type="text" v-model="search" />
			<button @click="SearchList()">Search</button>
		</div>
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
			this.$router.push('/');
			this.searchInit();
		},
		searchInit() {
			this.search = '';
		},
	},
};
</script>

<style></style>
