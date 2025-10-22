<script lang="ts">
	export let conteudo: Array<{ nome: string; txt: string }> = [];
	export let slogan: string;
	export let titulo: string;
</script>

<section id="passo">
	<div id="cardSlogan">
		<h2>{@html slogan}</h2>
	</div>
	<div id="passos">
		<div id="divs">
			{#each conteudo as conteudo, key}
				<div class="conteudo">
					<div id="key"><p>{key + 1}</p></div>
					<div id="txt">
						<h3>{conteudo.nome}</h3>
						<p>{conteudo.txt}</p>
					</div>
				</div>
				{#if key + 1 != 3}
					<hr />
				{/if}
			{/each}
		</div>
	</div>
</section>

<style lang="scss">
	@use '$lib/styles/Basics.scss' as b;

	#passo {
		height: fit-content;
		display: flex;
		justify-content: space-around;
		align-items: center;
		flex-direction: column;
		gap: 32px;

		#cardSlogan {
			width: 100%;
			height: fit-content;
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 32px;
			border-radius: 20px;
			text-align: center;
			h2 {
				@include b.fr(12vw, 700);
				:global(span) {
					@include b.fr(15vw, 800);
				}
			}
		}

		#passos {
			@include b.mor();
			padding: 32px;
			border-radius: 20px;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-around;
			width: 100%;

			#divs {
				display: flex;
				flex-direction: column;
				gap: 32px;
				.conteudo {
					display: flex;
					justify-content: space-between;
					flex-direction: column;
					text-align: center;
					align-items: center;
					gap: 16px;
					width: 100%;

					#key {
						width: 20%;
						display: flex;
						align-items: center;
						justify-content: center;
						@include b.fr(10vw, 700);
						p {
							margin: 0;
						}
					}

					#txt {
						width: 80%vw;
						display: flex;
						flex-direction: column;
						gap: 8px;
						h3 {
							@include b.fr(7vw, 700);
							margin: 5px;
						}
						p {
							@include b.ls(6vw);
							margin: 5px;
						}
					}
				}
				hr {
					width: 90%;
					height: 1px;
					border: none;
				}
			}
		}
	}

	//light
	#passo {
		#cardSlogan {
			background-color: #16608850;
			color: white;
			h2 {
				:global(span) {
					color: b.$teal-l;
				}
			}
		}

		#passos {
			#divs {
				.conteudo {
					#key {
						color: b.$teal-l;
					}

					#txt {
						h3 {
							color: b.$teal-l;
						}
						p {
							color: b.$teal-l;
						}
					}
				}
				hr {
					background-color: b.$teal-l;
				}
			}
		}
	}

	//dark
	:global(.dark) {
		#passo {
			#cardSlogan {
				background-color: #16608850;
				color: b.$teal-l;
				h2 {
					:global(span) {
						color: white;
					}
				}
			}

			#passos {
				#divs {
					.conteudo {
						#key {
							color: b.$ice-d;
						}

						#txt {
							h3 {
								color: b.$ice-d;
							}
							p {
								color: b.$ice-d;
							}
						}
					}
					hr {
						background-color: b.$teal-l;
					}
				}
			}
		}
	}
</style>
