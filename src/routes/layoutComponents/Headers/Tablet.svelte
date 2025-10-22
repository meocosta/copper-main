<script lang="ts">
	import Themes from '$lib/components/Temas/Themes.svelte';
	import MudaLang from '$lib/components/ChangeLanguage.svelte';

	type aba = { icon: any; titulo: string; href: string };

	export let aba: Array<aba> = [];
	export let abaAtual: string = '/';
</script>

<section id="HeaderSection">
	<div id="header">
		<header>
			<h1>.crs</h1>
		</header>
		<nav>
			{#each aba as t}
				<a href={t.href}>
					<button class:ativo={abaAtual === (t.href === '/' ? 'home' : t.href.slice(1))}>
						<svelte:component this={t.icon} class="icone" />
						{#if abaAtual === (t.href === '/' ? 'home' : t.href.slice(1))}
							<p>{t.titulo}</p>
						{/if}
					</button>
				</a>
			{/each}
		</nav>
	</div>
	<div id="lateral">
		<MudaLang />
		<div class="pointer"><Themes /></div>
	</div>
</section>

<style lang="scss">
	@use '$lib/styles/Basics.scss' as b;

	//layout
	#HeaderSection {
		position: fixed;
		padding: 16px;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		z-index: 100 !important;
		align-items: end;

		div#header {
			backdrop-filter: blur(50px);
			display: flex;
			padding: 16px;
			box-sizing: border-box;
			justify-content: space-between;
			align-items: center;
			width: calc(100vw - 32px);
			border-radius: 20px;

			header {
				@include b.fr(4vw, 300);
			}

			nav {
				a {
					text-decoration: none;
				}
				display: flex;
				width: fit-content;
				max-width: 95vw;
				padding: 16px;
				gap: 24px;
				justify-content: space-around;
				height: fit-content;
				border-radius: 20px;
				align-items: center;

				button {
					width: fit-content;
					padding: 16px;
					max-width: 23.33vw;
					min-width: 10vw;
					display: flex;
					justify-content: center;
					gap: 16px;
					align-items: center;
					height: 6vh;
					border-radius: 20px;
					border: none;
					overflow: hidden;
					text-overflow: ellipsis;

					:global(svg) {
						width: 100%;
						height: 100%;
					}
				}

				.ativo {
					@include b.fr(4.5vw, 600);
				}
			}
		}

		div#lateral {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}
	}

	//light
	#HeaderSection {
		div#header {
			background-color: none;

			header {
				color: b.$ice-l;
			}

			nav {
				border: solid 2px white;
				button {
					background-color: b.$ice-l;

					:global(svg) {
						stroke: white;
					}
				}

				.ativo {
					background-color: b.$navy-l;
					color: white;
				}
			}
		}
	}

	//dark
	:global(.dark) {
		#HeaderSection {
			div#header {
				background-color: #eef4ed50;

				header {
					color: white;
				}

				nav {
					button {
						background-color: b.$ice-d;

						:global(svg) {
							stroke: b.$teal-d;
						}
					}

					.ativo {
						background-color: b.$teal-d;
						color: b.$ice-d;

						:global(svg) {
							stroke: b.$ice-d;
						}
					}
				}
			}
		}
	}
</style>
