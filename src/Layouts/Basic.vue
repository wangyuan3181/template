<template>
	<a-layout class="basic">
		<a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
			<BasicSide></BasicSide>
		</a-layout-sider>
		<a-layout>
			<a-layout-header style="background: #fff; padding: 0">
				<menu-unfold-outlined v-if="collapsed" class="trigger" @click="() => (collapsed = !collapsed)" />
				<menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
			</a-layout-header>
			<a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
				<transition name="scale">
					<router-view></router-view>
				</transition>
			</a-layout-content>
			<a-layout-footer style="text-align: center">
				<BasicFooter></BasicFooter>
			</a-layout-footer>
		</a-layout>
	</a-layout>
</template>

<script setup lang='ts'>
import {
	UserOutlined,
	VideoCameraOutlined,
	UploadOutlined,
	MenuUnfoldOutlined,
	MenuFoldOutlined,
} from '@ant-design/icons-vue';
import BasicHeader from './BasicHeader.vue'
import BasicSide from './BasicSide.vue'
import BasicFooter from './BasicFooter.vue'


const collapsed = ref<boolean>(false)
</script>

<style lang='scss' scoped>
.basic {
	.main {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: row;
	}
}

.scale-enter-from,
.scale-leave-to {
	transform: scale(0);
}

.scale-leave-from,
.scale-enter-to {
	transform: scale(1);
}

.scale-enter-active,
.scale-leave-active {
	transition: all 0.2s;
}
</style>

<style scoped>
#components-layout-demo-custom-trigger .trigger {
	font-size: 18px;
	line-height: 64px;
	padding: 0 24px;
	cursor: pointer;
	transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
	color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
	height: 32px;
	background: rgba(255, 255, 255, 0.3);
	margin: 16px;
}

.site-layout .site-layout-background {
	background: #fff;
}
</style>