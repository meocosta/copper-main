<script lang="ts">
	export let conteudo: Array<{ nome: string; txt: string }> = [];
</script>

<section id="grid">
	<div class="parent">
		<div class="conteudo"><p>{@html conteudo[0].txt}</p></div>
		<div class="txt"><h3>{@html conteudo[1].nome}</h3></div>
		<div class="conteudo"><p>{@html conteudo[1].txt}</p></div>
	</div>
	<div class="parent2">
		<div class="txt"><h3>{@html conteudo[0].nome}</h3></div>
		<div id="code">
			<pre>
				<code>
import * from std.io
name = input!("What's your name?")
println!("Your name is $name")
				</code>
			</pre>
		</div>

		<div class="conteudo"><p>{@html conteudo[2].txt}</p></div>

		<div class="txt"><h3>{@html conteudo[2].nome}</h3></div>
	</div>
</section>

<style lang="scss">
	@use '$lib/styles/Basics.scss' as b;

	#grid {
		display: flex;
		align-items: center;
		justify-content: center;
		height: fit-content;
		padding: 32px 49px;
		gap: 24px;
		.parent,
		.parent2 {
			display: flex;
			flex-direction: column;
			justify-content: center;
			gap: 24px;
			height: fit-content;
			width: 100%;

			div {
				display: flex;
				align-items: center;
				justify-content: center;
				padding: 32px 24px;
				border-radius: 20px;
				height: fit-content;
				width: 100%;
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
				@include b.ls(4vw, 500);
				color: b.$teal-l;
				margin: 0;

				:global(span) {
					color: b.$ice-d;
				}
			}
		}

		#code {
			background-color: #151b23;

			@include b.ls(2vw, 500);
			pre {
				margin: 0px;
				color: white;
			}
		}
	}

	//light
	#grid {
		.txt {
			background-color: b.$teal-l;
			color: white;
		}

		.conteudo {
			@include b.mor();
			p {
				color: b.$teal-l;

				:global(span) {
					color: b.$ice-d;
				}
			}
		}

		#code {
			background-color: #151b23;
			pre {
				color: white;
			}
		}
	}

	//dark
	:global(.dark) {
		#grid {
		.txt {
			background-color: b.$teal-d;
			color: b.$ice-d;
		}

		.conteudo {
			@include b.mor();
			p {
				color: b.$ice-d;

				:global(span) {
					color: white;
				}
			}
		}

		#code {
			background-color: #151b23;
			pre {
				color: white;
			}
		}
	}
	}
</style>
