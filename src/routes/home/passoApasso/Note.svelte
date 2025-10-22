<script lang="ts">
	export let conteudo: Array<{ nome: string; txt: string }> = [];
	export let slogan: string;
	export let titulo: string;
</script>

<section class="passo">
	<div class="card-slogan">
		<h2>{@html slogan}</h2>
	</div>
	<div class="passos">
		<h2>{titulo}</h2>
		<div>
			{#each conteudo as item, i (item.nome)}
				<div class="conteudo">
					<div class="key"><p>{i + 1}</p></div>
					<div class="txt">
						<h3>{item.nome}</h3>
						<p>{item.txt}</p>
					</div>
				</div>
				{#if i + 1 != conteudo.length}
					<p class="listra">|</p>
				{/if}
			{/each}
		</div>
	</div>
</section>

<style lang="scss">
	@use '$lib/styles/Basics.scss' as b;

	//display e tamanhos
	.passo {
		height: 80vh;
		display: flex;
		justify-content: space-around;
		align-items: center;

		.card-slogan {
			max-width: 40vw;
			min-width: 25vw;
			width: fit-content;
			height: fit-content;
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 32px;
			border-radius: 20px;

			h2 {
				text-align: center;
				@include b.fr(4vw, 400);

				:global(span) {
					@include b.fr(5vw, 500);
				}
			}
		}

		.passos {
			display: flex;
			flex-direction: column;
			align-items: start;
			justify-content: space-around;
			gap: 24px;

			h2 {
				@include b.ls(5vw);
			}

			.conteudo {
				display: flex;
				justify-content: space-between;
				align-items: center;
				width: 50vw;

				.key {
					width: 10vh;
					height: 10vh;
					display: flex;
					align-items: center;
					justify-content: center;
					@include b.fr(4vw);
					border-radius: 50%;
				}

				.txt {
					width: 40vw;

					h3 {
						@include b.fr(2vw);
						margin: 5px;
					}

					p {
						@include b.ls(1.5vw);
						margin: 5px;
					}
				}
			}

			.listra {
				width: 10vh;
				text-align: center;
			}
		}
	}

	//light
	.passo {
		.card-slogan {
			background-color: b.$teal-l;
			color: b.$navy-d;

			h2 {
				:global(span) {
					color: white;
				}
			}
		}

		.passos {
			h2 {
				color: b.$teal-l;
			}

			.conteudo {
				.key {
					background-color: white;
					color: b.$teal-l;
				}

				.txt {
					h3 {
						color: b.$teal-l;
					}

					p {
						color: b.$teal-l;
					}
				}
			}

			.listra {
				color: b.$teal-l;
			}
		}
	}

	//dark
	:global(.dark) {
		.passo {
			.card-slogan {
				@include b.mor();
				color: b.$ice-d;

				h2 {
					:global(span) {
						color: white;
					}
				}
			}

			.passos {
				h2 {
					color: white;
				}

				.conteudo {
					.key {
						background-color: b.$teal-l;
						color: b.$ice-l;
					}

					.txt {
						h3 {
							color: b.$teal-d;
						}

						p {
							color: white;
						}
					}
				}

				.listra {
					width: 10vh;
					text-align: center;
					color: b.$teal-l;
				}
			}
		}
	}
</style>
