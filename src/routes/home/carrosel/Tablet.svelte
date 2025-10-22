<script lang="ts">
	type conteudo = { icon: any; nome: string; txt: string };

	export let conteudo: Array<conteudo> = [];
	export let titulo: string = '';

	let selecionado: conteudo = conteudo[0];
	let count = 1;

	$: {
		selecionado = conteudo[count - 1];
	}

	setInterval(() => {
		switch (count) {
			case 1:
				selecionado = conteudo[0];
				count++;
				break;
			case 2:
				selecionado = conteudo[1];
				count++;
				break;
			case 3:
				selecionado = conteudo[2];
				count = 1;
				break;
		}
	}, 7000);
</script>

<section id="CarroselHome">
	<h2>{@html titulo}</h2>

	<div id="card">
		<div>
			<svelte:component this={selecionado.icon} class="icone" />
			<h3>{selecionado.nome}</h3>
		</div>

		<p>{selecionado.txt}</p>
	</div>
	<div id="bals">
		<div
			class="ball"
			class:ativo={count == 1}
			on:click={() => {
				count = 1;
			}}
		></div>
		<div
			class="ball"
			class:ativo={count == 2}
			on:click={() => {
				count = 2;
			}}
		></div>
		<div
			class="ball"
			class:ativo={count == 3}
			on:click={() => {
				count = 3;
			}}
		></div>
	</div>
</section>

<style lang="scss">
	@use '$lib/styles/Basics.scss' as b;
	//desing e estilização
	#CarroselHome {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: fit-content;
		gap: 49px;

		h2 {
			@include b.fr(8vw, 500);
			text-align: center;
		}

		#card {
			width: 100%;
			height: 50vw;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-around;
			border-radius: 20px;
			padding: 20px;
			text-align: center;

			div {
				display: flex;
				width: 90%;
				justify-content: space-around;
				align-items: center;
			}

			:global(svg) {
				width: 15vw;
				height: 15vw;
			}

			h3 {
				@include b.ls(10vw, 500);
				margin: 6px;
			}

			p {
				@include b.ls(4vw, 500);
				margin: 6px;
			}
		}

		#bals {
			display: flex;
			justify-content: space-around;
			gap: 49px;
			.ball {
				width: 20px;
				height: 20px;
				border-radius: 50%;
			}
		}
	}

	//light
	#CarroselHome {
		h2 {
			color: b.$teal-l;

			:global(span) {
				color: b.$ice-d;
			}
		}

		#card {
			background-color: #d9d9d950;
			border: solid 2px white;

			:global(svg) {
				stroke: b.$teal-l;
			}

			h3 {
				color: b.$teal-l;
			}

			p {
				color: b.$teal-l;
			}
		}

		#bals {
			.ball {
				background-color: b.$ice-l;
				border: 2px b.$teal-l solid;
			}

			.ativo {
				background-color: b.$teal-l;
			}
		}
	}

	//dark
	:global(.dark) {
		#CarroselHome {
			h2 {
				color: b.$navy-d;
				:global(span) {
					color: white;
				}
			}

			#card {
				:global(svg) {
					stroke: white;
				}

				h3 {
					color: white;
				}

				p {
					color: white;
				}
			}

			#bals {
				.ball {
					background-color: b.$navy-l;
				}

				.ativo {
					background-color: b.$ice-l;
				}
			}
		}
	}
</style>
