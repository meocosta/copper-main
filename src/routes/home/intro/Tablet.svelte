<script lang="ts">
	import { TestTubeDiagonal, Play } from 'lucide-svelte';
	import './cores.scss';

	export let conteudo: Array<string> = [];
	export let botoes: Array<string> = [];
</script>

<section id="IntroHome">
	<h2>{@html conteudo[0]}</h2>
	<h3>{conteudo[1]}</h3>
	<div id="botoes">
		<button id="teste"><a href="/play"><TestTubeDiagonal /> {botoes[0]}</a></button>
		<button id="start"><a href="/download"><Play /> {botoes[1]}</a></button>
	</div>
</section>

<style lang="scss">
	@use '../../../lib/styles/Basics.scss' as b;

	//dimenções e estilização
	#IntroHome {
		width: 100vw;
		height: fit-content;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: start;
		padding: 32px;
		padding-top: 16vh;
		gap: 32px;

		h2 {
			@include b.fr(13vw, 800);
			width: 80vw;
		}

		h3 {
			@include b.ls(6vw, 400);
		}

		#botoes {
			width: 100%;
			display: flex;
			justify-content: space-between;
			button {
				width: fit-content;
				max-width: 45vw;
				height: fit-content;
				border-radius: 20px;
				padding: 24px;

				@include b.ls(5vw, 400);
				a {
					text-decoration: none;

					svg {
						height: 100%;
					}
				}
			}
		}
	}
</style>
