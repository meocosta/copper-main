<script lang="ts">
	import { lang } from '$lib/stores/language';
	import { razao } from '$lib/stores/tela';
	import { Conteudo } from './Conteudo';
	import { page } from '$app/stores'; // <- aqui

	const slugify = (s: string) =>
		String(s)
			.normalize('NFD')
			.replace(/[\u0300-\u036f]/g, '')
			.toLowerCase()
			.trim()
			.replace(/[^a-z0-9]+/g, '-')
			.replace(/(^-|-$)/g, '');

	export let map = Conteudo('docs').map((s) => ({
		...s,
		slug: slugify(s.title)
	}));

	let abaAtual: string;
	$: abaAtual = $page.url.pathname.split('/docs/').pop() ?? '';
</script>

{#if $razao < 0.63}
	<section id="DocsNavegation" class="cell">
		<nav>
			{#each map as m}
				<a href={`/docs/${m.slug}`} class:ativo={abaAtual == m.slug}>{m.title}</a>
			{/each}
		</nav>
		<section>
			<slot></slot>
		</section>
	</section>
{/if}
{#if $razao > 0.63 && $razao < 1}
	<section id="DocsNavegation" class="tablet">
		<nav>
			{#each map as m}
				<a href={`/docs/${m.slug}`} class:ativo={abaAtual == m.slug}>{m.title}</a>
			{/each}
		</nav>
		<section>
			<slot></slot>
		</section>
	</section>
{/if}
{#if $razao > 1}
	<section id="DocsNavegation" class="computador">
		<nav>
			{#each map as m}
				<a href={`/docs/${m.slug}`} class:ativo={abaAtual == m.slug}>{m.title}</a>
			{/each}
		</nav>
		<section>
			<slot></slot>
		</section>
	</section>
{/if}

<style lang="scss">
	@use '$lib/styles/Basics.scss' as b;

	#DocsNavegation {
		padding: 0;
		display: flex;

		section {
			padding: 0px;
		}

		nav {
			display: flex;
			justify-content: space-around;
			position: fixed;

			a {
				color: b.$ice-d;
				text-decoration: none;
			}

			a.ativo {
				color: b.$navy-l;
				text-decoration: underline;
			}
		}
	}

	:global(.dark) {
		#DocsNavegation {
			nav {
				a {
					color: b.$ice-l;
					text-decoration: none;
				}

				a.ativo {
					color: b.$ice-d;
					text-decoration: underline;
				}
			}
		}
	}

	.cell,
	.tablet {
		flex-direction: column;
		margin-top: 11vh;

		section {
			overflow-x: hidden;
			overflow-y: scroll;
			scrollbar-width: none;
			-ms-overflow-style: none;

			::-webkit-scrollbar {
				display: none;
			}
		}

		nav {
			gap: 16px;
			@include b.mor();
			padding: 16px;
			overflow-x: scroll;
			align-items: center;
		}
	}

	.tablet {
		height: 95vh;

		section {
			margin-top: 9vh;
		}

		nav {
			height: 8vh;
			margin: 16px;
			width: 80vw;
			z-index: 150;

			a {
				@include b.ls(5vw);
			}
		}
	}

	.cell {
		height: 85vh;
		align-items: center;

		section {
			margin-top: 11vh;
		}

		nav {
			height: 10vh;

			width: 90%;

			a {
				@include b.ls(7vw);
			}
		}
	}

	.computador {
		margin-top: 14vh;
		flex-direction: row-reverse;
		height: 85vh;

		section {
			overflow-x: hidden;
			overflow-y: scroll;
			scrollbar-width: none;
			-ms-overflow-style: none;
			margin-right: 15vw;

			::-webkit-scrollbar {
				display: none;
			}
		}

		nav {
			box-sizing: border-box;
			margin: 16px;
			@include b.mor();
			padding: 24px;
			width: 15vw;
			flex-direction: column;
			height: 80%;
			align-items: center;

			a {
				@include b.ls(2vw, 500);
			}
		}
	}
</style>
