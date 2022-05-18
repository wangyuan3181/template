<template>
	<div class="basic">
		<BasicHeader></BasicHeader>
		<div class="main">
			<BasicSide></BasicSide>
			<transition name="scale">
				<router-view></router-view>
			</transition>
		</div>
		<BasicFooter></BasicFooter>
	</div>
</template>

<script setup lang='ts'>
import BasicHeader from './BasicHeader.vue'
import BasicSide from './BasicSide.vue'
import BasicFooter from './BasicFooter.vue'
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