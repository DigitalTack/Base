<script lang="ts" setup>
	import { onMounted } from 'vue'
	import Bus from '@/infrastructure/bus'
	import SingleColumn from '@/infrastructure/layouts/SingleColumn.vue'

	const bus = Bus.create()


	onMounted(() => {
		bus.subscribe('nothing:result', (payload: any) => {
			// Do nothing
		})

		bus.publish('do:nothing')
	})

</script>

<template>
	<SingleColumn>
  	<template v-slot:content>
		  <h1>Home</h1>
		</template>
	</SingleColumn>
</template>
