<template>
	<div class="three-point-loading">
		<div class="three-point-loading__point three-point-loading__one"></div>
		<div class="three-point-loading__point three-point-loading__two"></div>
		<div class="three-point-loading__point three-point-loading__three"></div>
	</div>
</template>

<script>
export default {
	name: 'three-point-loading',
	data () {
		return {
			data: ''
		}
	}
}
</script>

<style lang="scss">
@keyframes bounce {
	to {
		opacity: 0.1;
		transform: translate3d(0, 1rem, 0);
	}
}
.three-point-loading {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	&__point {
		width: 1rem;
		height: 1rem;
		margin: 0 0.3rem;
		border-radius: 50%;
		background: $main-color;
		animation: bounce 0.6s infinite alternate;
	}
	&__two {
		animation-delay: 0.2s;
	}
	&__three {
		animation-delay: 0.4s;
	}
}
</style>
