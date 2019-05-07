<template>
	<div class="float-box">
		<div class="float-box__core" @mouseover="trigger" @mouseout="out">
			<span class="float-box__core__trigger">摸我</span>
			<div v-show="visible" class="float-box__core__content">what are you doing</div>
		</div>
		<div>test</div>
	</div>
</template>

<script>
export default {
	name: 'float-box',
	data () {
		return {
			data: '',
			visible: false
		}
	},
	methods: {
		trigger () {
			this.visible = true
		},
		out () {
			setTimeout(() => {
				this.visible = false
			}, 2000)
		}
	}
}
</script>

<style lang="scss">
.float-box {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	&__core {
		position: relative;
		&__trigger {
			display: inline-block;
			width: 100px;
			height: 40px;
			border: 1px solid $main-color;
		}
		&__content {
			position: absolute;
			top: 40px;
			left: 0;
			width: 100px;
			height: 100px;
			border: 1px solid $main-color;
		}
	}
}
</style>
