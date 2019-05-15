<template>
	<div class="float-box">
		<div class="float-box__core">
			<span class="float-box__core__trigger" @mouseover="trigger" @mouseout="out">touch me</span>
			<div class="float-box__core__content" @mouseover="trigger" @mouseout="out" :class="{'float-box__core__content--show': visible}">what are you doing</div>
		</div>
		<div>texte</div>
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
			this.visible = false
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
		display: inline-block;
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
			opacity: 0;
			transition: opacity 2s;
			&--show {
				opacity: 1;
			}
		}
	}
}
</style>
