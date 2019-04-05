<template>
	<div class="rainbow-loading">
		<div class="rainbow-loading__core"></div>
	</div>
</template>

<script>
export default {
	name: 'rainbow-loading',
	data () {
		return {
		}
	}
}
</script>

<style lang="scss">
@keyframes spinner{
	from {
		transform: rotate(0);
	}
	to {
		transform: rotate(360deg);
	}
}
.rainbow-loading {
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	&__core {
		position: relative;
		width: 100px;
		height: 100px;
		border-bottom: 2px solid red;
		border-radius: 50%;
		animation: spinner 1s linear infinite;
		&::before {
			content: '';
			position: absolute;
			top: 5px;
			right: 5px;
			bottom: 5px;
			left: 5px;
			border-radius: 50%;
			border-bottom: 2px solid green;
			animation: spinner 2s linear infinite;
		}
		&::after {
			content: '';
			position: absolute;
			top: 10px;
			right: 10px;
			bottom: 10px;
			left: 10px;
			border-radius: 50%;
			border-bottom: 2px solid blue;
			animation: spinner 3s linear infinite;
		}
	}
}
</style>
