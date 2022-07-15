<template>
	<div class="logo">
		<img src="@/assets/logo.png" alt="logog">
	</div>
	<a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
		<a-menu-item v-for="item in list" :key="item.id" @click="handle(item)">
			<svg-icon :name="item.icon"></svg-icon>
			<span>{{ item.name }}</span>
		</a-menu-item>

	</a-menu>
</template>

<script setup lang='ts'>
const selectedKeys = ref<string[]>(['1'])

const list = ref([
	{ path: '/home', name: '首页', icon: '化验科', id: 1 },
	{ path: '/myself', name: '我的', icon: '医疗_绷带', id: 2 },
	{ path: '/teleport', name: '内置组件', icon: '医疗_账单', id: 3 },
])

const router = useRouter();
console.log('onRoutes', router);

const handle = (item: any) => {
	router.push({ path: item.path })
}
</script>

<style lang='scss' scoped>
.logo {
	width: 100%;
	height: 60px;

	img {
		width: 100%;
		height: 100%;
	}
}
</style>