<script lang="ts">
	import { lang, t } from '$lib/stores/language';
	import apple from './apple.png';
	import linux from './linux.png';
	import wins from './windows.png';

	let trad: string = t('down.titulo');
	let error: string = t('down.erro');
	let passos = getPassos();
	let passosTitulo = t('down.passo.titulo');

	function getPassos(): Array<string> {
		let passosArray: Array<string> = [];
		let qttd = Number(t('down.passo.qttd'));
		for (let i = 0; i < qttd; i++) {
			passosArray.push(t('down.passo.passo' + (i + 1)));
		}
		return passosArray;
	}

	$: {
		$lang;
		trad = t('down.titulo');
		error = t('down.erro');
		passos = getPassos();
		passosTitulo = t('down.passo.titulo');
	}
</script>

<section id="downSection">
	<h1>{trad}</h1>
	<div id="options">
		<div class="op">
			<div>
				<img src={apple} alt="Brian é chato" />
				<h2>Mac</h2>
			</div>

			<a href="https://github.com/liy77/copper-lang/blob/master/install-mac.sh" target="_blank"><button>.sh -macos</button></a>
		</div>
		<div class="op">
			<div>
				<img src={wins} alt="Brian é chato" />
				<h2>Windows</h2>
			</div>
			<a href="https://github.com/liy77/copper-lang/blob/master/install.bat" target="_blank"><button>.bat</button></a>
		</div>
		<div class="op">
			<div>
				<img src={linux} alt="Brian é chato" />
				<h2>Linux</h2>
			</div>
			<a href="https://github.com/liy77/copper-lang/blob/master/install.sh" target="_blank"><button>.sh</button></a>
		</div>
	</div>

	<h3>{error}</h3>
	<a href="https://github.com/liy77/copper-lang" target="_blank"><button>GITHUB REPO</button></a>

	<div id="passoApassoGithub">
		<h2>{passosTitulo}</h2>
		<ol>
			{#each passos as p}
				<li>{p}</li>
			{/each}
		</ol>
	</div>
</section>

<style lang="scss">
	@use '../../lib/styles/Basics.scss' as b;

	#downSection {
		a {
			text-align: center;
		}

		a button {
			color: b.$blue-l;
			border: solid b.$blue-l 2px;
			border-radius: 16px;
			background-color: transparent;
			padding: 16px;
		}

		a button:hover {
			color: b.$navy-l;
			border: solid b.$navy-l 2px;
		}

		h3 {
			color: b.$ice-d;
		}

		h1 {
			color: b.$ice-d;
		}

		.op {
			background-color: b.$blue-l;
			color: white;

			button {
				color: b.$ice-d;
			}
		}

		.op:hover {
			background-color: b.$ice-d;
		}

		#passoApassoGithub {
			h2 {
				color: b.$ice-d;
			}

			ol li {
				color: b.$teal-l;
			}
		}
	}

	:global(.dark) {
		#downSection {
			a button {
				color: b.$ice-l;
				border: solid b.$ice-l 2px;
				border-radius: 16px;
			}

			a:hover {
				color: b.$navy-l;
			}

			h3 {
				color: b.$ice-l;
			}

			h1 {
				color: b.$ice-l;
			}
			.op {
				background-color: b.$blue-d;
			}

			#passoApassoGithub {
				h2 {
					color: b.$ice-l;
				}

				ol li {
					color: b.$teal-d;
				}
			}
		}
	}

	#downSection {
		margin-top: 15vh;
		display: flex;
		flex-direction: column;
		gap: 42px;
		h1 {
			@include b.fr(11vw, 500);
		}

		#options {
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			align-items: center;

			.op {
				transition: all 0.5s ease-in-out;
				border-radius: 16px;
				width: 32%;
				display: flex;
				flex-direction: column;
				gap: 16px;
				align-items: center;
				justify-content: center;
				height: 25vh;
				@include b.ls(2vw);

				a button {
					cursor: pointer;
					@include b.ls(2vw);
					border-radius: 16px;
					@include b.mor();
					padding: 8px;
				}

				div {
					display: flex;
					justify-content: center;
					gap: 16px;
					align-items: center;
				}

				img {
					width: 10%;
				}
			}
		}

		h3 {
			@include b.ls(2.5vw);
		}

		a button {
			@include b.ls(4vw);
			text-align: center;
			text-decoration: none;
		}

		a button:hover {
			transform: scale(1.1);
			transition: all 0.5s ease-in-out;
		}

		#passoApassoGithub {
			padding: 16px 48px;
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 24px;

			h2 {
				@include b.fr(5vw);
			}

			ol li {
				@include b.ls(2vw);
				margin-top: 24px;
				text-align: start;
			}
		}
	}
</style>
