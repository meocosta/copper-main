<script lang="ts">
	import Themes from '$lib/components/Temas/Themes.svelte';
	import MudaLang from '$lib/components/ChangeLanguage.svelte';

	type aba = { icon: any; titulo: string; href: string };

	export let aba: Array<aba> = [];
	export let abaAtual: string = '/';
</script>

<section id="HeaderSection">
	<header>
		<h1>.crs</h1>
		<div class="pointer">
			<Themes />
			<MudaLang />
		</div>
	</header>
	<nav>
		{#each aba as t}
			<a href={t.href}>
				<button class:ativo={abaAtual === (t.href === '/' ? 'home' : t.href.slice(1))}>
					<svelte:component this={t.icon} class="icone" />
				</button>
			</a>
		{/each}
	</nav>
</section>

<style lang="scss">
	@use '$lib/styles/Basics.scss' as b;

	.pointer {
		pointer-events: all;
		display: flex;
	}

	#HeaderSection {
		position: fixed;
		pointer-events: none;
		z-index: 100;
		inset: 0;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 100vw;
		height: 100vh;
		padding: 8px;

		header,
		nav {
			width: 100%;
			height: fit-content;
			padding: 10px;
			box-sizing: border-box;
			display: flex;
			flex-direction: row;
			align-items: center;
			pointer-events: all;
			@include b.mor();

			:global(.dark) & {
				background-color: b.$teal-d;
				border: 2px b.$blue-d solid;
			}
		}

		header {
			justify-content: space-between;
			padding: 8px;
			color: b.$teal-l;
			@include b.fr(4.5vw, 400);

			.pointer{
				width: 50vw;
				display: flex;
				justify-content: space-around;
				align-items: center;
			}

			:global(.dark) & {
				color: b.$teal-d;
			}
		}

		nav {
			justify-content: space-around;
			display: grid;
			grid-template-columns: repeat(5, 1fr);
			justify-items: center;
			align-items: center;
			border: 2px solid b.$navy-l;

			a {
				text-decoration: none;
			}

			button {
				width: 15vw;
				height: 15vw;
				border-radius: 20px;
				padding: 10px;
				box-sizing: border-box;
				display: flex;
				align-items: center;
				justify-content: space-around;
				background-color: b.$ice-l;
				border: 2px solid b.$sky-l;

				:global(.dark) & {
					background-color: b.$ice-d;
					border: 2px solid b.$sky-d;
				}

				p {
					@include b.ls(6vw, 400);
					color: b.$teal-l;
					width: 90%;
					overflow: hidden;
					text-overflow: ellipsis;
					text-decoration: none;
				}

				:global(svg) {
					stroke: b.$teal-l;
					width: 90%;
					height: 90%;
				}
			}

			.ativo {
				width: 20vw;
				background-color: b.$teal-l;

				p {
					color: white;
				}

				:global(svg) {
					stroke: white;
					width: 50%;
				}
			}
		}
	}

	:global(.dark) {
		#HeaderSection {
			header {
				color: b.$ice-d;
				background-color: #eef4ed50;
			}

			nav {
				background-color: #eef4ed50;
				a button {
					background-color: b.$ice-d;

					:global(svg) {
						stroke: b.$navy-d;
					}
				}

				.ativo {
					background-color: b.$navy-d;
					p {
						color: b.$ice-d;
					}

					:global(svg) {
						stroke: b.$ice-d;
					}
				}
			}
		}
	}
</style>
