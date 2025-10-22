<script lang="ts">
	import { lang, t } from '$lib/stores/language';
	import { razao } from '$lib/stores/tela';
	import Note from './Note.svelte';
	import Tablet from './Tablet.svelte';
	import Cellphone from './Cellphone.svelte';

	type conteudo = { nome: string; txt: string };

	let conteudo: Array<conteudo> = achaConteudo('home.carrosel');

	$: {
		$lang;
		conteudo = achaConteudo('home.carrosel');
	}

	function achaConteudo(path: string): Array<conteudo> {
		let returnContent: Array<conteudo> = [];
		let qttd = Number(t(path + '.quantidade'));
		for (let i = 1; i <= qttd; i++) {
			returnContent.push({
				nome: t(path + '.conteudo' + i + '.nome'),
				txt: t(path + '.conteudo' + i + '.txt')
			});
		}
		return returnContent;
	}
</script>

{#if $razao < 0.63}
	<Cellphone {conteudo}/>
{/if}
{#if $razao > 0.63 && $razao < 1}
	<Tablet {conteudo} />
{/if}
{#if $razao > 1}
	<Note {conteudo} />
{/if}
