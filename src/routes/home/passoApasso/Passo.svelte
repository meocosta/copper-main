<script lang="ts">
	import { lang, t } from '$lib/stores/language';
	import { razao } from '$lib/stores/tela';
	import Note from './Note.svelte';
	import Cellphone from './Cellphone.svelte';

	type conteudo = { nome: string; txt: string };

	let conteudo: Array<conteudo> = achaConteudo('home.passo');
	let titulo: string = t('home.passo.titulo');
	let slogan: string = t('home.passo.slogan');

	$: {
		$lang;
		conteudo = achaConteudo('home.passo');
		titulo= t('home.passo.titulo');
		slogan = t('home.passo.slogan');
	}

	function achaConteudo(path: string): Array<conteudo> {
		let returnContent: Array<conteudo> = [];
		let qttd = Number(t(path + '.quantidade'));
		for (let i = 1; i <= qttd; i++) {
			returnContent.push({
				nome: t(path + '.passo' + i + '.nome'),
				txt: t(path + '.passo' + i + '.txt')
			});
		}
		return returnContent;
	}
</script>

{#if $razao < 1}
	<Cellphone {conteudo} {slogan} {titulo} />
{/if}
{#if $razao > 1}
	<Note {conteudo} {slogan} {titulo} />
{/if}
