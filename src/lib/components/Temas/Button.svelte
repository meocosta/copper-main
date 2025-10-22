<script lang="ts">
	export let variant: string = 'default';
	export let size: string = 'default';
</script>

<button class="{variant} {size}" {...$$restProps}>
	<slot />
</button>

<style lang="scss">
	@use '$lib/styles/Basics.scss' as b;

	button {
		transition: all 0.5s ease-in-out;
		background: transparent;
		border: 2px solid b.$teal-l;
		border-radius: 50%;
		height: 3vw;
		width: 3vw;
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;

		// SVG sempre ocupa 50% do botão
		:global(svg) {
			width: 50%;
			height: 50%;
			color: b.$teal-l;
		}

		// Dark mode
		:global(.dark) & {
			border: 2px solid b.$teal-d;

			:global(svg) {
				color: b.$teal-d;
			}
		}
	}

	button:focus,
	button:active {
		outline: none;
		box-shadow: none;
	}

	/* Ajustes de tamanho apenas */
	@media (min-aspect-ratio: 0.62) and (max-aspect-ratio: 1) {
		button {
			height: 7vw;
			width: 7vw;
		}
	}

	@media (min-aspect-ratio: 1) {
		button {
			height: 6vh;
			width: 6vh;
		}
	}

	@media (max-aspect-ratio: 0.63) {
		button {
			height: 12vw;
			width: 15vw;
			border-radius: 16px;
		}
	}
</style>

