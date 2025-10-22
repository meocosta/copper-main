<script lang="ts">
	import { Sun } from 'lucide-svelte';
	import { Moon } from 'lucide-svelte';
	import {tema} from "$lib/stores/theme";

	import { toggleMode } from 'mode-watcher';
	import Button from './Button.svelte';
</script>

<Button onclick={toggleMode} variant="outline" size="icon">
	<Sun
		id="sun"
		class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 !transition-all dark:-rotate-90 dark:scale-0"
	/>
	<Moon
		id="moon"
		class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 !transition-all dark:rotate-0 dark:scale-100"
	/>
</Button>

<style lang="scss">
	@use '$lib/styles/Basics.scss' as b;

    :global(svg#sun) , :global(svg#moon){
        position: absolute;
        inset: 25%;
        width: 50%;
        height: 50%;
    }

	:global(svg#sun) {
		transition: all 0.5s ease-in-out !important;
		transform: rotate(0deg) scale(1);

		:global(.dark) & {
			transform: rotate(90deg) scale(0);
		}
	}

	:global(svg#moon) {
		transition: all 0.5s ease-in-out !important;
		transform: rotate(90deg) scale(0);

		:global(.dark) & {
			transform: rotate(0deg) scale(1);
		}
	}
</style>
