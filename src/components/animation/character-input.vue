<template>
	<div class="character-input">
		<div class="character-input__core">{{msg}}</div>
	</div>
</template>

<script>
export default {
	name: 'character-input',
	data () {
		return {
			msg: 'are you ok!'
		}
	}
}
</script>

<style lang="scss">
@keyframes typing { from { width: 0; } }
@keyframes blink-caret { 50% { border-color: transparent; } }
.character-input {
	&__core {
		font: bold 200% Consolas, Monaco, monospace;
		border-right: .1em solid;
		width: 11ch; /* # of chars */
		margin: 2em 1em;
		white-space: nowrap;
		overflow: hidden;
		animation: typing 11s steps(11, end), /* # of steps = # of chars */
							blink-caret .5s step-end infinite alternate;
	}
}
</style>
