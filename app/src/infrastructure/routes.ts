import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '@/infrastructure/views/HomeView.vue'

const routes = [
	{
		path: '/',
		component: HomeView
	},
]

const router = createRouter({
	history: createMemoryHistory(),
	routes
})

export { router }