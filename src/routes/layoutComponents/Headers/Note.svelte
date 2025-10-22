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
			<h1>Copper</h1>
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

			<MudaLang />
			<div class="pointer"><Themes /></div>
		</nav>
	</div>
</section>

<style lang="scss">
	@use '$lib/styles/Basics.scss' as b;

	//layout
	#HeaderSection {
		z-index: 100;
		position: fixed;
		box-sizing: border-box;
		padding: 10px;
		box-sizing: border-box;
		width: 100vw;

		div#header {
			background-color: none;
			backdrop-filter: blur(50px);
			display: flex;
			padding: 10px;
			justify-content: space-between;
			border-radius: 20px;

			header {
				width: 35vw;
				@include b.fr(2vw, 500);

				h1 {
					margin: 0;
				}
			}

			nav {
				a {
					text-decoration: none;
				}
				display: flex;
				width: 65vw;
				justify-content: space-around;
				height: 9vh;
				border-radius: 20px;
				align-items: center;

				button {
					cursor: pointer;
					width: 7vw;
					display: flex;
					justify-content: center;
					gap: 6px;
					align-items: center;
					height: 6vh;
					border-radius: 20px;
					border: none;
					overflow: hidden;
					text-overflow: ellipsis;

					:global(svg) {
						stroke: white;
						width: 70%;
						height: 70%;
					}
				}

				.ativo {
					width: 14vw;
					@include b.ls(2vw);

					:global(svg) {
						width: 20%;
						height: 70%;
					}
				}
			}
		}
	}

	//light
	#HeaderSection {
		div#header {
			background-color: none;

			:global(.dark) & {
				background-color: #8da9c450;
			}

			header {
				color: b.$teal-l;

				:global(.dark) & {
					h1 {
						color: white;
					}
				}
			}

			nav {
				border: solid 2px white;

				button {
					background-color: b.$ice-l;
					:global(svg) {
						stroke: b.$navy-l;
					}
				}

				button:hover {
					background-color: b.$teal-l;

					:global(svg) {
						stroke: white;
					}
				}

				.ativo {
					background-color: b.$navy-l;
					color: white;

					:global(svg) {
						stroke: white;
					}
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
					color: b.$ice-d;
				}

				nav {
					button {
						background-color: b.$ice-d;

						:global(svg) {
							stroke: b.$navy-d;
						}
					}

					.ativo {
						background-color: b.$navy-d;
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
