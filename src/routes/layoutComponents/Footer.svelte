<script lang="ts">
	import { lang, t } from '$lib/stores/language';
	import foundation from '$lib/assets/copper-foundation.png';

	let footerGrat = t('footer.agradecimento');
	let footerSlogan = t('footer.slogan');
	let footerRedes = t('footer.redes');

	$: {
		$lang;
		footerRedes = t('footer.redes');
		footerSlogan = t('footer.slogan');
		footerGrat = t('footer.agradecimento');
	}
</script>

<section id="footer">
	<div>
		<img src={foundation} alt="Brian é lixo" />
		<p>{footerSlogan}</p>
		<p>{footerGrat}</p>
	</div>
	<div>
		<p>{footerRedes}</p>
		<a href="">@coppermind</a>
		<a href="">saccopper@gmail.com</a>
	</div>
</section>

<style lang="scss">
	@use '$lib/styles/Basics.scss' as b;
	@media (max-aspect-ratio: 0.6) {
		#footer {
			display: flex;
			flex-direction: column-reverse;
			margin-bottom: 10vh;

			div {
				height: fit-content;
				display: flex;
				flex-direction: column;
				text-align: center;
			}

			img {
				width: 70vw;
			}

			p {
				@include b.ls(5vw);
				color: b.$blue-l;
				margin-top: 16px;
			}

			a {
				@include b.ls(5vw);
				color: b.$navy-l;
				margin-top: 16px;
			}
		}
	}

    @media (min-aspect-ratio: 0.5) and (max-aspect-ratio: 0.75) {
		#footer {
			display: flex;
			flex-direction: column-reverse;
			margin-bottom: 10vh;

			div {
				height: fit-content;
				display: flex;
				flex-direction: column;
				text-align: center;
			}

			img {
				width: 70vw;
			}

			p {
				@include b.ls(5vw);
				color: b.$blue-l;
				margin-top: 16px;
			}

			a {
				@include b.ls(5vw);
				color: b.$navy-l;
				margin-top: 16px;
			}
		}
	}

    @media (min-aspect-ratio: 1) {
		#footer {
			display: flex;
			flex-direction: row-reverse;

			div {
                padding: 16px;
				height: fit-content;
				display: flex;
				flex-direction: column;
                gap: 8px;
                justify-content: center;
				text-align: center;
                width: 50vw;
			}

			img {
				width: 30vw;
			}

			p {
				@include b.ls(2vw);
				color: b.$blue-l;
				margin-top: 16px;
			}

			a {
				@include b.ls(2vw);
				color: b.$navy-l;
				margin-top: 16px;
			}
		}
	}
</style>
