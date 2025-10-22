<script lang="ts">
	import { razao } from '$lib/stores/tela';
	import { lang, t } from '$lib/stores/language';
	import './sobre.scss';
	import Cellphone from './Cell.svelte';
	import Tablet from './Tablet.svelte';
	import Note from './Note.svelte';

	let id: string;
	$: id = $razao < 0.5 ? 'celular' : $razao < 1 ? 'tablet' : $razao > 1 ? 'computador' : '';
	type conteudo = { nome: string; resposta: string };

	function pegaConteudo(índice: string, caminho: string): Array<conteudo> {
		let qttd: number = Number(t(caminho + '.qttd'));
		let conteudo: Array<conteudo> = [];
		for (let i: number = 1; i <= qttd; i++) {
			conteudo.push({
				nome: t(caminho + índice + i + '.pergunta'),
				resposta: t(caminho + índice + i + '.resposta')
			});
		}

		return conteudo;
	}

	// Função para organizar tudo
	function getSobre() {
		return {
			intro: {
				titulo: t('sobre.sobreintro.titulo'),
				subtitulo: t('sobre.sobreintro.subtitulo')
			},
			porque: {
				porque: {
					titulo: t('sobre.sobreporque.porque.titulo'),
					paragrafos: [
						t('sobre.sobreporque.porque.paragrafos.pr1'),
						t('sobre.sobreporque.porque.paragrafos.pr2')
					]
				},
				questoes: {
					titulo: t('sobre.sobreporque.questoes.titulo'),
					conteudo: pegaConteudo('.FAQ', 'sobre.sobreporque.questoes.conteudo')
				}
			},
			velocidade: {
				titulo: t('sobre.sobrevelocidade.titulo'),
				paragrafos: [
					t('sobre.sobrevelocidade.paragrafos.pr1'),
					t('sobre.sobrevelocidade.paragrafos.pr2'),
					t('sobre.sobrevelocidade.paragrafos.pr3')
				]
			},
			motor: {
				titulo: t('sobre.sobremotor.titulo'),
				paragrafos: [
					t('sobre.sobremotor.paragrafos.pr1'),
					t('sobre.sobremotor.paragrafos.pr2'),
					t('sobre.sobremotor.paragrafos.pr3')
				]
			},
			linguagens: {
				titulo: t('sobre.sobrelanguages.titulo'),
				lista: [
					{
						id: t('sobre.sobrelanguages.linguagens.t1.id'),
						nome: t('sobre.sobrelanguages.linguagens.t1.nome'),
						descricao: t('sobre.sobrelanguages.linguagens.t1.descricao')
					},
					{
						id: t('sobre.sobrelanguages.linguagens.t2.id'),
						nome: t('sobre.sobrelanguages.linguagens.t2.nome'),
						descricao: t('sobre.sobrelanguages.linguagens.t2.descricao')
					},
					{
						id: t('sobre.sobrelanguages.linguagens.t3.id'),
						nome: t('sobre.sobrelanguages.linguagens.t3.nome'),
						descricao: t('sobre.sobrelanguages.linguagens.t3.descricao')
					}
				]
			},
			time: {
				titulo: t('sobre.sobretime.titulo')
			},
			contato: {
				titulo: t('sobre.sobrecontato.titulo'),
				instagram: t('sobre.sobrecontato.instagram')
			}
		};
	}

	let sobre = getSobre();
	$: ($lang, (sobre = getSobre()));
</script>

{#if $razao < 0.63}
	<Cellphone {sobre}/>
{/if}
{#if $razao > 0.63 && $razao < 1}
	<Tablet {sobre}/>
{/if}
{#if $razao > 1}
	<Note {sobre}/>
{/if}

