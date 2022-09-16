<template>
	<Card></Card>
</template>

<script>
import Card from '@/components/Card.vue';
export default {
	props: {
		searchWord: String,
	},
	components: {
		Card,
	},
};
</script>

<style></style>
