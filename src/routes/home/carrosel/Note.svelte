<script lang="ts">
	type conteudo = { icon: any; nome: string; txt: string };

	export let conteudo: Array<conteudo> = [];
	export let titulo: string = '';
	export let subtitulo: string = '';

	import { onMount } from 'svelte';

	let posicoes = ['d1', 'a', 'd2'];
	let indices: number[] = [];

	onMount(() => {
		indices = conteudo.map((_, i) => i % 3); // cada card começa numa posição
		setInterval(() => {
			indices = indices.map((i) => (i + 1) % 3);
		}, 4000);
	});
</script>

<section id="ferramentas">
	<div id="txt">
		<h2>{@html titulo}</h2>
		<p>{subtitulo}</p>
	</div>
	<div id="carrosel">
		{#each conteudo as c, key}
			<div class="card {posicoes[indices[key]]}">
				<h3>{c.nome}</h3>
				<p>{c.txt}</p>
			</div>
		{/each}
	</div>
</section>

<style lang="scss">
	@use '$lib/styles/Basics.scss' as b;

	//layout
	#ferramentas {
		height: 150vh;

		div {
			height: 75vh;
		}

		#txt {
			display: flex;
			flex-direction: column;
			align-items: center;
			text-align: center;
			justify-content: start;
			gap: 8px;

			h2 {
				@include b.fr(7.8vw, 600);
				width: 73vw;
				margin: 0;
			}

			p {
				@include b.ls(3vw, 500);
				margin: 0;
			}
		}

		#carrosel {
			position: relative;
			.card {
				border-radius: 20px;
				position: absolute;
				width: 25vw;
				height: 55vh;
				padding: 24px;
				justify-content: center;
				flex-direction: column;
				display: flex;
				align-items: center;
				text-align: center;
				gap: 8px;
				h3 {
					@include b.fr(3vw, 700);
					margin: 0;
				}
				p {
					@include b.ls(2vw, 400);
					margin: 0;
				}
				transition: all 1s ease-in-out;
			}

			.card.a {
				left: 50%;
				transform: translateX(-50%) translateY(-12.5vh);
				z-index: 2;
			}

			.card.d1 {
				left: 50%;
				transform: translateX(calc(-50% - 25vw - 32px)) translateY(0);
			}

			.card.d2 {
				left: 50%;
				transform: translateX(calc(-50% + 25vw + 32px)) translateY(0);
			}
		}
	}

	//light
	#ferramentas {

		#txt {

			h2 {
				color: b.$teal-l;

				:global(span) {
					color: b.$ice-d;
				}
			}

			p {
				color: b.$teal-l;
			}
		}

		#carrosel {
			.card {
				background-color: b.$teal-l;
				color: b.$ice-l;
			}

			.card.a {
				background-color: b.$ice-l;
				color: b.$teal-l;
			}
		}
	}


	//dark
	:global(.dark){
		#ferramentas {
		background-color: b.$ice-d;
		#txt {

			h2 {
				color: b.$sky-l;

				:global(span) {
					color: white;
				}
			}

			p {
				color: b.$ice-l;
			}
		}
	}
	}
</style>
