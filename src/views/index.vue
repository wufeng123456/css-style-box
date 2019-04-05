<template>
	<div class="page">
		<div class="page__left">
			<div class="page__left__header">{{logo}}</div>
			<div class="page__left__list" :class="{'page__left__list--select': index === selectIndex}" v-for="(item, index) in componentList" :key="index" @click="select(item, index)">
				{{item.desc}}
			</div>
		</div>
		<div class="page__right">
			<component :is="selectComponent"></component>
		</div>
	</div>
</template>

<script>
import ThreePointLoading from 'components/loading/three-point-loading'
import RainbowLoading from 'components/loading/rainbow-loading'
export default {
	name: 'index',
	data () {
		return {
			logo: 'logo',
			selectComponent: 'ThreePointLoading',
			selectIndex: 0,
			componentList: [
				{
					name: 'ThreePointLoading',
					desc: '三点loading'
				},
				{
					name: 'RainbowLoading',
					desc: '彩虹loading'
				}
			]
		}
	},
	components: {
		ThreePointLoading,
		RainbowLoading
	},
	methods: {
		select (val, index) {
			this.selectIndex = index
			this.selectComponent = val.name
		}
	}
}
</script>

<style lang="scss">
@import '../assets/color.scss';
.page {
	width: 100%;
	height: 100%;
	&__left {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		width: 300px;
		height: 100%;
		border-right: 1px solid $sub-color;
		&__header {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 60px;
			border-bottom: 1px solid $sub-color;
		}
		&__list {
			width: 100%;
			height: 40px;
			line-height: 40px;
			text-indent: 10px;
			cursor: pointer;
			&--select {
				background: $sub-color;
			}
			&:hover {
				background: $sub-color;
			}
		}
	}
	&__right {
		height: 100%;
		margin-left: 300px;
	}
}
</style>
