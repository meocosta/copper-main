<script lang="ts">
	import { razao } from '$lib/stores/tela';
	import Cellphone from './Cell.svelte';
	import Note from './Note.svelte';
	import Tablet from './Tablet.svelte';
	
</script>

{#if $razao < 0.63}
	<Cellphone  />
{/if}
{#if $razao > 0.63 && $razao < 1}
	<Tablet  />
{/if}
{#if $razao > 1}
	<Note  />
{/if}