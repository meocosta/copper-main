<script lang="ts">
	import { mudarlinguagem } from '$lib/functions/AtualizaStores';
	import { lang } from '$lib/stores/language';

	let openlang = false;

	let langS: string = language();

	$: {
		$lang;
		langS = language();
	}

	function language(): string {
		switch ($lang) {
			case 'pt_br':
				return 'BR';
			case 'en_us':
				return 'US';
			default:
				return '';
		}
	}
</script>

<section id="changeLanguage">
	<button
		id="languageselector"
		type="button"
		aria-label="Change language"
		on:click={() => {
			openlang = !openlang;
		}}
	>
		<span id="txt">{langS}</span>
	</button>
	<div id="options" class:open={openlang}>
		<button
			on:click={() => {
				mudarlinguagem('pt_br');
				openlang = false;
			}}
			class={$lang == 'pt_br' ? 'ativo' : ''}
			class:open={openlang}>BR</button
		>
		<button
			on:click={() => {
				mudarlinguagem('en_us');
				openlang = false;
			}}
			class={$lang == 'en_us' ? 'ativo' : ''}
			class:open={openlang}>US</button
		>
	</div>
</section>

<style lang="scss">
	@use '$lib/styles/Basics.scss' as b;

	section {
		pointer-events: all;
		position: relative;
		width: fit-content;
		padding: 0px;
		height: fit-content;
		#languageselector {
			@include b.mor();
			color: b.$teal-l;
			position: relative;
			z-index: 2;
			width: 100%;
			height: 100%;
		}
		#options {
			opacity: 0;
			transition: all 1s ease-in-out;
			display: flex;
			inset: 0;
			position: absolute;
			flex-direction: column;
			gap: 8px;
			z-index: 1;
			overflow: hidden;
			@include b.mor(0.7);

			button {
				color: b.$ice-l;
				border: solid white 2px;
				background-color: b.$blue-l;
				@include b.fr(1.5vw);
			}

			.ativo {
				border: solid white 2px;
				background-color: b.$ice-l;
				color: white;
			}
		}

		#options.open {
			opacity: 1;
		}
	}

	:global(.dark) {
		section {
			#languageselector {
				background-color: b.$ice-d;
				color: b.$teal-d;
			}
			#options {
				background-color: b.$ice-d;

				button {
					border: solid white 2px;
					background-color: b.$blue-d;
				}

				.ativo {
					border: solid white 2px;
					background-color: b.$blue-l;
					color: white;
				}
			}
		}
	}

	@media (max-aspect-ratio: 0.5) {
		section {
			margin: 8px 0px;
			#languageselector,
			#options {
				@include b.fr(7vw);
				width: 8vh;
				height: 5vh;
			}
			#options {
				padding: 8px;
				inset: 0;
				position: absolute;
				z-index: 1;
				button {
					height: 5vh;

					@include b.fr(7vw);
				}
			}

			#options.open {
				transform: translateY(-14.5vh);
				height: calc(12vh + 16px);
			}
		}
	}

	@media (min-aspect-ratio: 0.5) and (max-aspect-ratio: 1) {
		section {
			margin: 16px 0px;
			#languageselector,
			#options {
				@include b.fr(5vw);
				width: 8vh;
				height: 5vh;
			}
			#options {
				padding: 12px;
				inset: 0;
				position: absolute;
				z-index: 1;
				button {
					height: 5vh;

					@include b.fr(5vw);
				}
			}

			#options.open {
				transform: translateX(-9vh);
				height: calc(10vh + 24px);
			}
		}
	}

	@media (min-aspect-ratio: 1) {
		section {
			#languageselector,
			#options {
				width: 5vw;
				height: 2.5vw;
				border-radius: 16px;
				@include b.fr(1.5vw);
			}
			#options {
				padding: 8px;
				inset: 0;
				position: absolute;
				z-index: 1;
				button {
					height: 3vw;
				}
			}

			#options.open {
				transform: translateY(3vw);
				height: calc(6vw + 16px);
			}
		}
	}
</style>
