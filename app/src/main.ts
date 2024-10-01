import '@/infrastructure/assets/main.css'

import { createApp } from 'vue'
import App from '@/infrastructure/App.vue'
import { router } from '@/infrastructure/routes'

import DoNothingAction from '@/actions/DoNothingAction'

import Bus from '@/infrastructure/bus'
const bus = Bus.create()


bus.subscribe('do:nothing', (payload) => {
	const action = new DoNothingAction()
	const result = action.execute(payload)

	bus.publish('nothing:result', result)
})

const app = createApp(App)
app.use(router)

app.mount('#app')
