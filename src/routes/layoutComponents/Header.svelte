<script lang="ts">
	import { razao } from '$lib/stores/tela';
	import Cellphone from './Headers/Cell.svelte';
	import Note from './Headers/Note.svelte';
	import Tablet from './Headers/Tablet.svelte';
	import { lang, t } from '$lib/stores/language';
	import { page } from '$app/stores'; // <- aqui

	import { BadgeQuestionMark, BookMarked, House, CirclePlay, Download } from 'lucide-svelte';

	let aba = [
		{ icon: House, titulo: t('layout.nav.home'), href: '/' },
		{ icon: BadgeQuestionMark, titulo: t('layout.nav.sobre'), href: '/sobre' },
		{ icon: BookMarked, titulo: t('layout.nav.documentos'), href: '/docs' },
		{ icon: CirclePlay, titulo: t('layout.nav.playground'), href: '/play' },
		{ icon: Download, titulo: t('layout.nav.down'), href: '/download' }
	];

	$: abaAtual = $page.url.pathname.split('/').pop() || 'home';

	$: {
		$lang;
		aba = [
			{ icon: House, titulo: t('layout.nav.home'), href: '/' },
			{ icon: BadgeQuestionMark, titulo: t('layout.nav.sobre'), href: '/sobre' },
			{ icon: BookMarked, titulo: t('layout.nav.documentos'), href: '/docs' },
			{ icon: CirclePlay, titulo: t('layout.nav.playground'), href: '/play' },
			{ icon: Download, titulo: t('layout.nav.down'), href: '/download' }
		];
	}
</script>

{#if $razao < 0.63}
	<Cellphone {aba} {abaAtual} />
{/if}
{#if $razao > 0.63 && $razao < 1}
	<Tablet {aba} {abaAtual} />
{/if}
{#if $razao > 1}
	<Note {aba} {abaAtual} />
{/if}
