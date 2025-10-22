<script>
	import { API_URL } from './config.js';
	// @ts-ignore
	import { onMount } from 'svelte';
	import { razao } from '$lib/stores/tela';

	let codigo = '';
	let resultado = { logs: [], saida: '' };
	let carregando = false;

	async function executarCodigo() {
		carregando = true;
		resultado = { logs: [], saida: '' };

		try {
			const res = await fetch(`${API_URL}/execute`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ codigo }) // Envia o código no formato certo
			});

			if (!res.ok) {
				throw new Error(`Erro ${res.status}`);
			}

			const data = await res.json();
			const linhas = (data.resultado || '').split('\n');

			// Separa logs e saída real
			// @ts-ignore
			const indiceSaida = linhas.findIndex((l) => l.includes('Running'));
			const logs = linhas.slice(0, indiceSaida + 1);
			const saida = linhas
				.slice(indiceSaida + 1)
				.join('\n')
				.trim();

			resultado = { logs, saida };
		} catch (err) {
			resultado = { logs: [], saida: 'Erro ao conectar com a API' };
			console.error(err);
		} finally {
			carregando = false;
		}
	}
</script>

<section id="PlaygroundSection" class={$razao > 1 ? 'note' : $razao > 0.63 ? 'tablet' : 'cell'}>
	<h2>atenção, essa aba está em construção, e teste, nada está na versão final</h2>
	<h1>
		<span>P</span>
		<span>L</span>
		<span>A</span>
		<span>Y</span>
		<span>G</span>
		<span>R</span>
		<span>O</span>
		<span>U</span>
		<span>N</span>
		<span>D</span>
	</h1>

	<div id="code">
		<div id="txt">
			<textarea bind:value={codigo} rows="10" cols="50" placeholder="Digite seu código aqui..."
			></textarea>
		</div>
		<div id="result">
			{#if carregando}
				<p>Executando...</p>
			{:else if resultado.saida || resultado.logs.length}
				<div id="resultadofinal">
					{#if resultado.logs.length}
						<pre class="logs">{resultado.logs.join('\n')}</pre>
					{/if}
					{#if resultado.saida}
						<pre class="saida">{resultado.saida}</pre>
					{/if}
				</div>
			{:else}
				<p>o resultado aqui...</p>
			{/if}
		</div>
	</div>

	<button on:click={executarCodigo}>Executar</button>
</section>

<style lang="scss">
	@use '$lib/styles/Basics.scss' as b;

	//light
	#PlaygroundSection {
		button {
			background-color: b.$blue-l;
			color: white;
			border: 2px solid white;
		}

		button:hover {
			background-color: b.$ice-d;
			box-shadow: 0px 10px 15px b.$blue-l;
		}

		h1 {
			color: b.$blue-d;

			span:hover {
				color: b.$ice-d;
				text-shadow: 0px 10px 20px b.$ice-d;
			}
		}

		#code {
			div {
				border: 5px solid b.$ice-d;
			}

			#result {
				background-color: black;

				p {
					color: #0d1117;
				}
			}
		}
	}

	//dark
	:global(.dark) {
		#PlaygroundSection {
			h1 {
				color: white;
				text-shadow: 0px 0px 20px white;

				span:hover {
					color: b.$ice-l;
					text-shadow: 0px 10px 20px b.$ice-d;
				}
			}

			#code {
				div {
					border: 5px solid white;
				}

				#result {
					background-color: black;

					p {
						color: #0d1117;
					}
				}
			}
		}
	}

	.note {
		margin-top: 10vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		justify-content: space-around;
		height: 90vh;

		h1 {
			@include b.ls(15vw, 800);
			margin-bottom: -20vh;
			display: flex;
			cursor: default;

			span:hover {
				transform: translateY(-10px);
				transition: all 0.2s ease-in-out;
				z-index: 0;
			}
		}

		#code {
			flex-direction: row;
			display: flex;
			justify-content: space-around;
			min-height: 40vh;
			width: 100vw;

			div {
				height: 100%;
				width: 40vw;
				display: flex;
				align-items: center;
				justify-content: center;
			}

			#result {
				border-radius: 16px;

				p {
					@include b.ls(3vw);
				}

				#resultadofinal {
					padding: 16px;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					overflow: scroll;
					scrollbar-width: none;
					-ms-overflow-style: none;
					::-webkit-scrollbar {
						display: none;
					}
				}
			}
		}

		textarea {
			width: 100%;
			height: 100%;
			background: #0d1117;
			color: #c9d1d9;
			border: 1px solid #30363d;
			border-radius: 8px;
			padding: 10px;
			font-family: monospace;
			font-size: 1rem;
		}

		button {
			padding: 10px 20px;
			border-radius: 16px;
			cursor: pointer;
			margin-top: 10px;
			transition: 0.2s;
			@include b.ls(2vw);
		}

		button:hover {
			transform: translateY(-10px);
		}

		pre {
			width: 80%;
			text-align: left;
			padding: 1rem;
			border-radius: 8px;
			font-family: monospace;
			overflow-x: auto;
		}

		.logs {
			background: #111;
			color: #888;
			font-size: 0.9rem;
			margin-top: 1rem;
		}

		.saida {
			background: #000;
			color: b.$blue-l;
			font-weight: bold;
			font-size: 1rem;
			margin-top: 0.5rem;
		}
	}

	.cell {
		margin-top: 7vh;
		gap: 8px;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		justify-content: space-around;
		height: 90vh;

		h2{
			@include b.ls(5vw)
		}

		h1 {
			@include b.ls(15vw, 800);
			align-items: center;
			justify-content: center;
			width: 100vw;
			display: flex;
			cursor: default;

			span:hover {
				transform: translateY(-10px);
				transition: all 0.2s ease-in-out;
				z-index: 0;
			}
		}

		#code {
			flex-direction: column;
			display: flex;
			justify-content: space-around;
			width: 100vw;
			padding: 16px;
			gap: 24px;

			div {
				height: 25vh;
				width: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
			}

			#result {
				border-radius: 20px;

				p {
					@include b.ls(7vw);
				}

				#resultadofinal {
					padding: 16px;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					overflow: scroll;
					scrollbar-width: none;
					-ms-overflow-style: none;
					::-webkit-scrollbar {
						display: none;
					}
				}
			}
		}

		textarea {
			width: 100%;
			height: 100%;
			background: #0d1117;
			color: #c9d1d9;
			border: 1px solid #30363d;
			border-radius: 0px;
			padding: 10px;
			font-family: monospace;
			font-size: 1rem;
		}

		button {
			padding: 10px 20px;
			border-radius: 16px;
			cursor: pointer;
			margin-top: 10px;
			transition: 0.2s;
			@include b.ls(5vw);
		}

		button:hover {
			transform: translateY(-10px);
		}

		pre {
			width: 80%;
			text-align: left;
			padding: 1rem;
			border-radius: 8px;
			font-family: monospace;
			overflow-x: auto;
		}

		.logs {
			background: #111;
			color: #888;
			font-size: 0.9rem;
			margin-top: 1rem;
		}

		.saida {
			background: #000;
			color: b.$blue-l;
			font-weight: bold;
			font-size: 1rem;
			margin-top: 0.5rem;
		}
	}

	.tablet {
		margin-top: 12vh;
		gap: 8px;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		justify-content: space-around;
		height: 90vh;

		h2{
			@include b.ls(5vw);
			width: 90vw;
			text-align: start;
		}

		h1 {
			@include b.ls(15vw, 800);
			align-items: center;
			justify-content: center;
			width: 100vw;
			display: flex;
			cursor: default;

			span:hover {
				transform: translateY(-10px);
				transition: all 0.2s ease-in-out;
				z-index: 0;
			}
		}

		#code {
			flex-direction: column;
			display: flex;
			justify-content: space-around;
			width: 100vw;
			padding: 16px;
			gap: 24px;

			div {
				height: 25vh;
				width: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
			}

			#result {
				border-radius: 20px;

				p {
					@include b.ls(7vw);
				}

				#resultadofinal {
					padding: 16px;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					overflow: scroll;
					scrollbar-width: none;
					-ms-overflow-style: none;
					::-webkit-scrollbar {
						display: none;
					}
				}
			}
		}

		textarea {
			width: 100%;
			height: 100%;
			background: #0d1117;
			color: #c9d1d9;
			border: 1px solid #30363d;
			border-radius: 0px;
			padding: 10px;
			font-family: monospace;
			font-size: 1rem;
		}

		button {
			padding: 10px 20px;
			border-radius: 16px;
			cursor: pointer;
			margin-top: 10px;
			transition: 0.2s;
			@include b.ls(5vw);
		}

		button:hover {
			transform: translateY(-10px);
		}

		pre {
			width: 80%;
			text-align: left;
			padding: 1rem;
			border-radius: 8px;
			font-family: monospace;
			overflow-x: auto;
		}

		.logs {
			background: #111;
			color: #888;
			font-size: 0.9rem;
			margin-top: 1rem;
		}

		.saida {
			background: #000;
			color: b.$blue-l;
			font-weight: bold;
			font-size: 1rem;
			margin-top: 0.5rem;
		}
	}
</style>
