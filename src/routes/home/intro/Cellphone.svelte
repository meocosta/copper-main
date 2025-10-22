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
		<button id="teste"><a href="/play"><TestTubeDiagonal /> <p>{botoes[0]}</p></a></button>
		<button id="start"><a href="/docs/introducao"><Play /> <p>{botoes[1]}</p></a></button>
	</div>
</section>

<style lang="scss">
	@use '$lib/styles/Basics.scss' as b;

	#IntroHome {
		position: relative;
		width: 100vw;
		height: fit-content;
		box-sizing: border-box;
		gap: 32px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: start;
		padding: 24px;
		padding-top: 15vh;

		h2 {
			@include b.fr(12vw, 800);
			width: 80vw;
			margin: 0;
		}

		h3 {
			@include b.ls(7vw, 400);
		}

		#botoes {
			height: fit-content;
			display: flex;
			justify-content: center;
			gap: 24px;
			flex-direction: column;
			button {
				@include b.ls(8vw, 400);
				padding: 16px;
				border-radius: 20px;
				display: flex;
				justify-content: space-around;
				align-items: center;
				a {
					text-decoration: none;
					display: flex;
					align-items: center;
					gap: 16px;
				}
			}
		}
	}
</style>
