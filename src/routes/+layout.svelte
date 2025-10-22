<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import { ModeWatcher } from 'mode-watcher';
	import Header from './layoutComponents/Header.svelte';
	import Footer from './layoutComponents/Footer.svelte';
	import { scroll } from '$lib/stores/scroll';
	import { lang, t } from '$lib/stores/language';
	import { razao } from '$lib/stores/tela';
	import { onMount } from 'svelte';
	import { atualizatela, definecategoria } from '$lib/functions/AtualizaStores';
	import { browser } from '$app/environment';
	import { page } from '$app/state';

	let { children } = $props();

	let txt: string;
	$effect(() => {
		const _ = $lang;
		txt = t('layout.faixa');
	});

	let lastPath = $state<string | null>(null);

	$effect(() => {
		const current = page.url.pathname;

		if (!browser) return;

		if (lastPath === null) {
			lastPath = current;
			return;
		}

		if (current !== lastPath) {
			lastPath = current;
			window.location.reload();
		}
	});

	function atualizaScroll() {
		scroll.set(document.body.scrollTop);
	}

	onMount(() => {
		const handleResize = () => atualizatela(window.innerHeight, window.innerWidth);
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	});

	onMount(() => {
		window.addEventListener('scroll', atualizaScroll);
		return () => window.removeEventListener('scroll', atualizaScroll);
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Header />

<ModeWatcher />
{@render children?.()}

<Footer />

<style lang="scss">
	@use '$lib/styles/Basics.scss' as b;

	:global(section) {
		padding: 49px 32px;
	}

	:global(*) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	:global(body),
	:global(html) {
		margin: 0;
		padding: 0;
		overflow-x: hidden;
		scrollbar-width: none;
		-ms-overflow-style: none;
		::-webkit-scrollbar {
			display: none;
		}
	}

	:global(body) {
		background-color: b.$sky-l;

		:global(.dark) & {
			background-color: b.$ice-d;
		}
	}
</style>
