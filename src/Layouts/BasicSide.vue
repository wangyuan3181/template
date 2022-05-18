<template>
	<div class='side'>
		<div v-for="item in list" :key="item.id">
			<a-button @click="handle(item)">{{ item.name }}</a-button>
		</div>
	</div>
</template>

<script setup lang='ts'>

const list = ref([
	{ path: '/home', name: '首页', id: 1 },
	{ path: '/myself', name: '我的', id: 2 },
])

const router = useRouter();
console.log('onRoutes', router);

const handle = (item: any) => {
	router.push({ path: item.path })
}
</script>

<style lang='scss' scoped>
.side {
	width: 120px;
	height: 900px;
	background: rgb(147, 131, 131);
}
</style>