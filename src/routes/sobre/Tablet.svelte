<script lang="ts">
	export let sobre;
</script>

<section id="sobre">
	<section id="sobreIntro">
		<h1>{@html sobre.intro.titulo}</h1>
		<h2>{@html sobre.intro.subtitulo}</h2>
	</section>
	<section id="sobrePorque">
		<div id="porque">
			<h2>{sobre.porque.porque.titulo}</h2>
			{#each sobre.porque.porque.paragrafos as p}
				<p>{p}</p>
			{/each}
		</div>
		<div id="questoes">
			<h2>{sobre.porque.questoes.titulo}</h2>
			<div id="perguntas">
				{#each sobre.porque.questoes.conteudo as c}
					<details>
						<summary>{c.nome}</summary>
						<p>{c.resposta}</p>
					</details>
				{/each}
			</div>
		</div>
	</section>
	<section id="sobreVelocidade">
		<h2>{@html sobre.velocidade.titulo}</h2>
		{#each sobre.velocidade.paragrafos as p}
			<p>{@html p}</p>
		{/each}
	</section>
	<section id="sobreMotor">
		<h2>{sobre.motor.titulo}</h2>
		{#each sobre.motor.paragrafos as p}
			<p>{p}</p>
		{/each}
	</section>
	<section id="sobrelanguages">
		<div id="titulo"><h2>{sobre.linguagens.titulo}</h2></div>
		{#each sobre.linguagens.lista as el}
			<div id={el.id}>
				<h3>{el.nome}</h3>
				<p>{el.descricao}</p>
			</div>
		{/each}
	</section>
	<section id="sobreTime">
		<h2>{@html sobre.time.titulo}</h2>
		<p>
			// Maria Elisa Costa <br /> // Fernando Marques <br /> // Bruno Teixeira <br /> // Ryan lima
			<br />// Miguel Pires <br /> // Rodrigo Dias <br /> // Rafael Ricomini <br> //Brian rhudy
		</p>
	</section>
	<section id="sobreContato">
		<h3>{sobre.contato.titulo}</h3>
		<h2>saccopper@gmail.com</h2>
		<h3>{sobre.contato.instagram}</h3>
	</section>
</section>

<style lang="scss">
	@use '../../lib/styles/Basics.scss' as b;

	#sobre {
		margin-top: 7vh;

		#sobreIntro {
			display: flex;
			flex-direction: column;
			gap: 8px;
			padding: 16px;
			text-align: start;

			h1 {
				@include b.fr(20vw, 600);
			}

			h2 {
				@include b.ls(10vw, 600);
			}
		}

		#sobrePorque {
			display: flex;
			flex-direction: column;
			padding: 32px 0px;

			div {
				padding: 32px 24px;
				display: flex;
				flex-direction: column;
			}

			h2 {
				@include b.fr(7vw, 500);
			}

			#porque {
				gap: 32px;
				border-radius: 16px 16px 0px 0px;

				p {
					@include b.ls(5vw);
					line-height: 115%;
				}
			}

			#questoes {
				border-radius: 0px 0px 16px 16px;

				&:hover {
					height: fit-content;
				}

				#perguntas {
					overflow-y: scroll;
					overflow-x: hidden;
					gap: 24px;
					scrollbar-width: none;
					-ms-overflow-style: none;

					::-webkit-scrollbar {
						display: none;
					}

					details {
						border-radius: 16px;
						padding: 32px;
						@include b.ls(5vw);
					}

					summary {
						cursor: pointer;
						font-weight: bold;
						list-style: none;
					}

					p {
						margin-top: 8px;
						@include b.ls(4vw, 400);
					}
				}
			}
		}

		#sobreVelocidade {
			gap: 32px;
			flex-direction: column;

			h2 {
				@include b.fr(10vw, 800);
				text-align: start;
			}

			p {
				@include b.ls(5vw);

				span {
					@include b.ls(6vw, 800);
				}
			}
		}

		#sobreMotor {
			transition: all 0.5s ease-in-out;
			border-radius: 16px;
			padding: 48px;
			flex-direction: column;
			gap: 32px;

			h2 {
				@include b.ls(10vw, 800);
			}

			p {
				@include b.ls(5vw, 500);
			}
		}

		#sobrelanguages {
			width: 100vw;
			margin: 0px -32px;
			padding: 40px 0px;
			display: grid;
			grid-template-rows: 1fr 1fr 1fr 1fr;
			text-align: center;

			h2 {
				@include b.fr(10vw, 500);
				width: 100%;
			}

			h3 {
				@include b.ls(8vw, 800);
			}

			p {
				@include b.ls(7vw);
			}

			div {
				padding: 32px;
				display: flex;
				flex-direction: column;
				justify-content: space-around;
				align-items: center;
			}
		}

		#sobreTime {
			justify-content: space-around;
			flex-direction: column;

			h2 {
				@include b.fr(10vw, 500);
			}

			p {
				@include b.ls(5vw, 500);
				height: 100%;
				line-height: 150%;
				text-align: end;
			}
		}

		#sobreContato {
			flex-direction: column;
			gap: 16px;
			text-align: center;

			h3 {
				@include b.fr(6vw);
			}

			h2 {
				@include b.ls(9vw);
			}
		}
	}
</style>
