<script lang="ts">
	import { razao } from '$lib/stores/tela';
	import { lang, t } from '$lib/stores/language';
	import { onMount } from 'svelte';
</script>


<section class="erro">
	{#if $razao > 1}
		<div id="carinha"><p>&#58;&#40;</p></div>
	{/if}
	<div id="mensagem">
		<h1>página indisponível</h1>
		<p>
			A Copper Foundation sente muito pelo inconveniente! Nos mande um feedback sobre o erro (como ocorreu, qual o retorno em seu console...). Estamos trabalhando para te oferecer a melhor experiência!
		</p>
		<a href="mailto:saccopper@gmail.com"><button>dar feedback</button></a>
	</div>
</section>

<style lang="scss">
	@use '$lib/styles/Basics.scss' as b;

	section {
		background-color: b.$sky-l;
		height: 100vh;
		width: 100vw;
		display: flex;
		align-items: center;
		justify-content: center;

		div {
			display: flex;
			justify-content: center;
			flex-direction: column;
			max-width: 50vw;
		}

		#carinha {
			width: 20vw;
			p {
				@include b.ls(30vw);
				color: b.$blue-l;
			}
		}

		#mensagem {
			gap: 32px;
			h1 {
				color: b.$ice-d;
				@include b.fr(7vw, 800);
			}
			p {
				color: b.$teal-l;
				@include b.ls(2vw);
			}
			a button {
				@include b.mor();
				color: b.$ice-d;
				padding: 16px;
				height: fit-content;
				width: fit-content;
				@include b.ls(2vw);
			}
		}
	}
</style>
