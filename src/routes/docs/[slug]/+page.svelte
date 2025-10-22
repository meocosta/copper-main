<script lang="ts">
	import { razao } from '$lib/stores/tela';
	import { lang, t } from '$lib/stores/language';
	import './+page.scss';
	import { Paragrafo } from '../Conteudo';
	export let data: { slug: string; id: number };

	let conteudoslug: { titulo: string; conteudo: string } = {
		titulo: t('docs.doc' + data.id + '.titulo'),
		conteudo: Paragrafo('docs.doc' + data.id)
	};

	$: {
		$lang;
		conteudoslug = {
			titulo: t('docs.doc' + data.id + '.titulo'),
			conteudo: Paragrafo('docs.doc' + data.id)
		};
	}

	function copiarTexto(txt : string) {
		var campoTexto = txt;
		navigator.clipboard
			.writeText(campoTexto)
			.then(() => {
				alert('Texto copiado: ' + campoTexto);
			})
			.catch((err) => {
				console.error('Erro ao copiar texto: ', err);
			});
	}
</script>

{#if $razao < 0.63}
	<section id={data.slug} class="conteudo celular">
		<h1>{conteudoslug.titulo}</h1>
		{@html conteudoslug.conteudo}
	</section>
{:else if $razao > 0.63 && $razao < 1}
	<section id={data.slug} class="conteudo tablet">
		<h1>{conteudoslug.titulo}</h1>
		{@html conteudoslug.conteudo}
	</section>
{:else if $razao > 1}
	<section id={data.slug} class="conteudo computador">
		<h1>{conteudoslug.titulo}</h1>
		{@html conteudoslug.conteudo}
	</section>
{/if}
