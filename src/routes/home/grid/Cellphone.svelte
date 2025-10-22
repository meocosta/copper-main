<script lang="ts">
	import imagem from '$lib/assets/code.png';
	export let conteudo: Array<{ nome: string; txt: string }> = [];
</script>

<section id="grid">
	<div class="parent">
		<div id="div1" class="conteudo"><p>{@html conteudo[0].txt}</p></div>
		<div id="div2" class="txt"><h3>{@html conteudo[0].nome}</h3></div>
		<div id="code">
			<pre>
				<code>
import * from std.io
name = input!("What's your name?")
println!("Your name is $name")
				</code>
			</pre>
		</div>
		<div id="div4" class="txt"><h3>{@html conteudo[2].nome}</h3></div>
		<div id="div5" class="conteudo"><p>{@html conteudo[2].txt}</p></div>
		<div id="div6" class="txt"><h3>{@html conteudo[1].nome}</h3></div>
		<div id="div7" class="conteudo"><p>{@html conteudo[1].txt}</p></div>
	</div>
</section>

<style lang="scss">
	@use '$lib/styles/Basics.scss' as b;

	#grid {
		display: flex;
		align-items: center;
		justify-content: center;
		height: fit-content;
		.parent {
			display: flex;
			flex-direction: column;
			gap: 16px;
			width: 100%;
			height: 100%;
			justify-content: center;

			div {
				display: flex;
				align-items: center;
				justify-content: center;
				padding: 24px;
				border-radius: 20px;

				height: fit-content;
			}
		}

		.txt {
			background-color: b.$teal-l;
			color: white;
			h3 {
				@include b.fr(7vw, 400);
				margin: 0;
			}
		}

		.conteudo {
			background-color: white;
			display: flex;
			align-items: center;
			justify-content: center;
			p {
				width: 90%;
				@include b.ls(6vw, 500);
				color: b.$teal-l;
				margin: 0;

				:global(span) {
					@include b.fr(6vw, 500);
					color: b.$ice-d;
				}
			}
		}

		#code {
			color: white;
			background-color: b.$ice-d;
			height: fit-content;
			font-size: 3.5vw;
		}
	}

	:global(.dark) {
		#grid {
			background-color: b.$ice-d;

			.txt {
				background-color: white;
				color: b.$sky-d;
			}
		}
	}
</style>
