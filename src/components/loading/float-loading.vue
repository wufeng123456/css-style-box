<template>
	<div class="float-loading">
		<div class="float-loading__core">
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
		</div>
	</div>
</template>

<script>
export default {
	name: 'float-loading',
	data () {
		return {
		}
	}
}
</script>

<style lang="scss">
@import '../../assets/color.scss';
@keyframes rotation {
	from {
		opacity: 1.2;
		transform: scale(1.2);
	}
	to {
		opacity: 0.3;
		transform: scale(0);
	}
}
.float-loading {
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	&__core {
		position: relative;
		width: 100px;
		height: 100px;
		border-radius: 50%;
		span {
			position: absolute;
			width: 16px;
			height: 16px;
			border-radius: 50%;
			background: $main-color;
			animation: rotation 1.04s ease infinite;
			&:nth-child(1) {
				top: 42px;
				left: -8px;
				animation-delay: 0.13s;
			}
			&:nth-child(2) {
				top: 7px;
				left: 7px;
				animation-delay: 0.26s;
			}
			&:nth-child(3) {
				top: -8px;
				right: 42px;
				animation-delay: 0.39s;
			}
			&:nth-child(4) {
				top: 7px;
				right: 7px;
				animation-delay: 0.52s;
			}
			&:nth-child(5) {
				top: 42px;
				right: -8px;
				animation-delay: 0.65s;
			}
			&:nth-child(6) {
				bottom: 7px;
				right: 7px;
				animation-delay: 0.78s;
			}
			&:nth-child(7) {
				bottom: -8px;
				left: 42px;
				animation-delay: 0.91s;
			}
			&:nth-child(8) {
				bottom: 7px;
				left: 7px;
			}
		}
	}
}
</style>
