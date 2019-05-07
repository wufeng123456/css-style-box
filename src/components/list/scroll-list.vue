<template>
	<div class="scroll-list">
		<div class="scroll-list__container" :style="'width:' + containerWidth + 'px;'">
			<div v-if="left !== coreOverflowWidth" class="scroll-list__container__before" @click="before"></div>
			<div class=" scroll-list__container__content">
				<div class="scroll-list__container__content__core" :style="'left:' + left + 'px;'">
					<div class="scroll-list__container__content__core__list" v-for="(item, index) in list" :key="index">
						{{item.name}}
					</div>
				</div>
			</div>
			<div v-if="left !== 0" class="scroll-list__container__after" @click="after"></div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'scroll-list',
	data () {
		return {
			list: [
				{
					name: '盖伦'
				},
				{
					name: '石头人'
				},
				{
					name: '小法'
				},
				{
					name: '瞎子'
				},
				{
					name: '流浪法师'
				},
				{
					name: '尼古拉斯——赵四'
				}
			],
			left: 0
		}
	},
	computed: {
		containerWidth () {
			return this.list.length > 3 ? 480 : this.list.length * 120
		},
		coreOverflowWidth () {
			return this.list.length > 4 ? -(this.list.length - 4) * 120 : 0
		}
	},
	methods: {
		before () {
			if (this.coreOverflowWidth <= this.left - 120) {
				this.left = this.left - 120
			}
		},
		after () {
			if (this.left !== 0) {
				this.left = this.left + 120
			}
		}
	}
}
</script>

<style lang="scss">
.scroll-list {
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	&__container {
		position: relative;
		// width: 480px;
		height: 60px;
		&__before {
			position: absolute;
			top: 19px;
			left: -30px;
			width: 0;
			height: 0;
			border-width: 10px 10px 10px 10px;
			border-style: solid;
			border-color: transparent $main-color transparent transparent;
			cursor: pointer;
		}
		&__content {
			position: relative;
			width: 100%;
			height: 100%;
			border: 1px solid $main-color;
			border-right: none;
			overflow: hidden;
			&__core {
				position: absolute;
				left: 0;
				width: 100%;
				height: 100%;
				color: $main-color;
				// overflow: hidden;
				white-space: nowrap;
				&__list {
					display: inline-block;
					width: 120px;
					height: 60px;
					line-height: 60px;
					border-right: 1px solid $main-color;
					box-sizing: border-box;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
					text-align: center;
				}
			}
		}
		&__after {
			position: absolute;
			top: 19px;
			right: -30px;
			width: 0;
			height: 0;
			border-width: 10px 10px 10px 10px;
			border-style: solid;
			border-color: transparent transparent transparent $main-color;
			cursor: pointer;
		}
	}
}
</style>
