<script lang="ts">
	import { lang, t } from '$lib/stores/language';
	import apple from './apple.png';
	import linux from './linux.png';
	import wins from './windows.png';

	let trad: string = t('down.titulo');
	let error: string = t('down.erro');

	$: {
		$lang;
		trad = t('down.titulo');
		error = t('down.erro');
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

			<button>.sh -macos</button>
		</div>
		<div class="op">
			<div>
				<img src={wins} alt="Brian é chato" />
				<h2>Windows</h2>
			</div>
			<button>.bat</button>
		</div>
		<div class="op">
			<div>
				<img src={linux} alt="Brian é chato" />
				<h2>Linux</h2>
			</div>
			<button>.sh</button>
		</div>
	</div>

	<h3>{error}</h3>
	<a href="https://github.com/liy77/copper-lang">GitHub Repo</a>
</section>

<style lang="scss">
	@use '$lib/styles/Basics.scss' as b;

	#downSection {
		a {
			color: b.$blue-l;
		}

		a:hover {
			color: b.$navy-l;
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
	}

	:global(.dark) {
		#downSection {
			a {
				color: b.$ice-l;
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
		}
	}

	#downSection {
		margin-top: 9vh;
		display: flex;
		flex-direction: column;
		gap: 24px;
		h1 {
			@include b.fr(20vw, 500);
		}

		#options {
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			align-items: center;
            gap: 16px;

			.op {
				transition: all 0.5s ease-in-out;
				border-radius: 16px;
				display: flex;
				width: 100%;
				flex-direction: column;
				gap: 16px;
				align-items: center;
				justify-content: center;
				height: 25vh;
				@include b.ls(7vw);

				button {
					cursor: pointer;
					width: 50%;
					@include b.ls(7vw);
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
			@include b.ls(5vw);
		}

		a {
			@include b.ls(8vw);
			text-align: center;
		}
	}
</style>
