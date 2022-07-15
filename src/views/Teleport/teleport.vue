<template>
	<a-button @click="showModal('编辑')" type="primary">Primary Button</a-button>

	<teleport to="#modelContent" v-if="isShowmodal1">
		<div>我是A组件</div>
	</teleport>
	<teleport to="#modelContent" v-if="isShowmodal2">
		<div>我是B组件</div>
	</teleport>
	<a-button @click="showModal('新增')" type="primary">Primary Button</a-button>

	<a-modal v-model:visible="visible" :title="title">
		<div id="modelContent"></div>
	</a-modal>

</template>

<script setup lang="ts">
const visible = ref<boolean>(false)
const isShowmodal1 = ref<boolean>(false)
const isShowmodal2 = ref<boolean>(false)
const title = ref('')

const showModal = (t: string) => {
	title.value = t
	visible.value = true
	setTimeout(() => {
		isShowmodal1.value = true
	}, 1);
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
</style>
