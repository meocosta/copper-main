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
			// maria elisa costa <br /> // fernando marques <br /> // bruno teixeira <br /> // ryan lima
			<br />// miguel pires <br /> // rodrigo dias <br /> // rafael ricomini <br> //brian rhudy
		</p>
	</section>
	<section id="sobreContato">
		<h3>{sobre.contato.titulo}</h3>
		<h2>saccopper@gmail.com</h2>
		<h3>{sobre.contato.instagram}</h3>
	</section>
</section>

<style lang="scss">
	@use '$lib/styles/Basics.scss' as b;
	#sobreIntro {
		display: flex;
		flex-direction: column;
		gap: 8px;
		text-align: center;
		padding: 48px 32px;

		h1 {
			@include b.fr(10vw, 600);
		}

		h2 {
			@include b.ls(3vw, 600);
		}
	}

	#sobrePorque {
		display: flex;
		padding: 32px;

		div {
			transition: all 0.5s ease-in-out;
			padding: 32px 24px;
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		div h2 {
			@include b.fr(4.5vw, 500);
		}

		#porque {
			justify-content: space-around;
			width: 50%;
			align-items: center;
			border-radius: 16px 0px 0px 16px;

			p {
				@include b.ls(2.5vw);
			}

			&:hover {
				transform: translateY(-30px);
				box-shadow: 0px 40px 40px b.$navy-l;
				z-index: 2;
			}
		}

		#questoes {
			border-radius: 0px 16px 16px 0px;
			width: 50%;

			#perguntas {
				padding: 32px 0px;
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
					@include b.ls(2.5vw);
					width: 100%;
				}

				summary {
					cursor: pointer;
					font-weight: bold;
					list-style: none;
				}

				p {
					margin-top: 8px;
					@include b.ls(2vw, 400);
				}
			}
		}
	}

	#sobreVelocidade {
		gap: 16px;
		flex-direction: column;
		padding: 32px;

		h2 {
			@include b.fr(5vw);
			text-align: center;
		}

		p {
			@include b.ls(2vw);

			span {
				@include b.ls(2vw, 800);
			}
		}
	}

	#sobreMotor {
		transition: all 0.5s ease-in-out;
		border-radius: 16px;
		padding: 32px;
		flex-direction: column;
		gap: 16px;

		h2 {
			@include b.ls(4vw, 800);
		}

		p {
			@include b.ls(2vw, 500);
		}
	}

	#sobreMotor:hover {
		transform: translateY(-2vh);
		box-shadow: 0px 10px 50px b.$teal-l;
	}

	#sobrelanguages {
		width: 100vw;
		margin: 0px -32px;
		padding: 32px 0px;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		text-align: center;

		h2 {
			@include b.ls(5vw, 500);
			width: 30vw;
		}

		h3 {
			@include b.ls(4vw, 800);
		}

		p {
			@include b.ls(2vw);
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

		h2 {
			@include b.fr(5vw, 300);
		}

		p {
			@include b.ls(2vw, 500);
			height: 100%;
			line-height: 150%;
		}
	}

	#sobreContato {
		flex-direction: column;
		gap: 16px;
		text-align: center;

		h3 {
			@include b.fr(3vw);
		}

		h2 {
			@include b.ls(7vw);
		}
	}
</style>
