import { createRouter, createWebHistory } from 'vue-router';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: () => import('../views/HomeView.vue'),
	},
	{
		path: '/random',
		name: 'Random',
		component: () => import('../views/RandomView.vue'),
	},
	{
		path: '/detail/:id',
		name: 'detail',
		component: () => import('../views/DetailView.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
