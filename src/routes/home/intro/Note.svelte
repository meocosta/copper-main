<script lang="ts">
	import { TestTubeDiagonal, Play } from 'lucide-svelte';
	import "./cores.scss";

	export let conteudo: Array<string> = [];
	export let botoes: Array<string> = [];
</script>

<section id="IntroHome">
	<h2>{@html conteudo[0]}</h2>
	<h3>{conteudo[1]}</h3>
	<div id="botoes">
		<button id="teste"><a href="/play"><TestTubeDiagonal /> {botoes[0]}</a></button>
		<button id="start"><a href="/docs/introducao"><Play /> {botoes[1]}</a></button>
	</div>
</section>

<style lang="scss">
	@use '$lib/styles/Basics.scss' as b;
	//layout
	#IntroHome {
		position: relative;
		width: 100vw;
		height: 100vh;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: start;
		padding: 32px;
		padding-top: 10vh;
		gap: 24px;

		h2 {
			@include b.fr(7vw, 500);
		}

		h3 {
			@include b.ls(3vw, 400);
		}

		#botoes {
			margin-top: 16px;
			width: 70vw;
			display: flex;
			gap: 32px;
			button {
				transition: all 0.5s ease-in;
				width: 30vw;
				padding: 16px;
				border-radius: 20px;
				display: flex;
				justify-content: space-around;
				align-items: center;

				&:hover {
					transform: translateY(-20px);
					box-shadow: 0px 10px 20px b.$blue-l;
				}

				a {
					text-decoration: none;
					align-items: center;
					text-align: center;

					:global(svg) {
						height: 100%;
					}
				}
			}
			#teste {
				@include b.ls(3vw, 400);
			}
			#start {
				@include b.ls(3vw, 400);
			}
		}
	}
</style>
