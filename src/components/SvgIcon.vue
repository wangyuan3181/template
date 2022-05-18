 <template>
	<svg aria-hidden="true" class="svg-icon">
		<use :xlink:href="symbolId" :fill="props.color" />
	</svg>
</template>

<script setup lang="ts" name="SvgIcon">
// 运行时声明
// const props = defineProps({
// 	prefix: {
// 		type: String,
// 		default: 'icon'
// 	},
// 	name: {
// 		type: String,
// 		required: true
// 	},
// 	color: {
// 		type: String,
// 		default: 'white'
// 	}
// })

// ts类型声明
// const props = defineProps<{
// 	prefix: string,
// 	name: string,
// 	color: string
// }>()

// 接口 ts类型声明
interface Props {
	prefix: string,
	name: string,
	color: string,
	demo1: string[],
	demo2: { a: number }
}

const props = withDefaults(defineProps<Props>(), {
	prefix: 'icon',
	name: '',
	color: 'white',
	demo1: () => ['one', 'two'],
	demo2: () => { return { a: 2 } }
})

const symbolId = computed(() => `#${props.prefix}-${props.name}`)

// 使用方式 <svg-icon name="化验科" />
</script>

<style scoped>
.svg-icon {
	width: 20px;
	height: 20px;
	fill: currentColor;
	vertical-align: middle;
	/* cursor: pointer; */
}
</style>
