<script lang="ts">
	import Tablet from './Tablet.svelte';
	import Note from './Note.svelte';
	import Cellphone from './Cellphone.svelte';
	import { razao } from '$lib/stores/tela';
	import { lang, t } from '$lib/stores/language';

	let path: string = 'home.intro';
	let conteudo: Array<string> = [t(path + '.titulo'), t(path + '.subtitulo')];
	let botoes: Array<string> = [t(path + '.botoes.teste'), t(path + '.botoes.start')];

	$: {
		$lang;
		conteudo = [t(path + '.titulo'), t(path + '.subtitulo')];
		botoes = [t(path + '.botoes.teste'), t(path + '.botoes.start')];
	}
</script>

{#if $razao < 0.63}
	<Cellphone conteudo={conteudo} botoes={botoes}/>
{/if}
{#if $razao > 0.63 && $razao < 1}
	<Tablet conteudo={conteudo} botoes={botoes}/>
{/if}
{#if $razao > 1}
	<Note conteudo={conteudo} botoes={botoes}/>
{/if}
