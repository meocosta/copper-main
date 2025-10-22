<script lang="ts">
	import { lang, t } from '$lib/stores/language';
    import {razao} from "$lib/stores/tela";
    import Note from "./Note.svelte";
    import Tablet from "./Tablet.svelte";
    import Cellphone from "./Cell.svelte";
    import { Bolt, CodeXml, Bot } from 'lucide-svelte';

	type conteudo = {icon: any; nome: string; txt: string };

    let icons = [Bolt, CodeXml, Bot]
	let conteudo: Array<conteudo> = achaConteudo('home.cards');
    let titulo = t("home.cards.titulo");
    let subtitulo = t("home.cards.subtitulo");

    $:{
        $lang;
        conteudo = achaConteudo("home.cards");
        titulo = t("home.cards.titulo");
        subtitulo = t("home.cards.subtitulo");
    }

	function achaConteudo(path: string): Array<conteudo> {
		let returnContent: Array<conteudo> = [];
        let qttd = Number(t(path+".quantidade"))
        for(let i = 1; i<= qttd; i++){
            returnContent.push({icon: icons[i-1], nome: t(path+".conteudo"+i+".nome"), txt: t(path+".conteudo"+i+".txt")})
        }
		return returnContent;
	}
</script>

{#if $razao < 0.63}
	<Cellphone {titulo} {conteudo} />
{/if}
{#if $razao > 0.63 && $razao < 1}
	<Tablet titulo={titulo} conteudo={conteudo}/>
{/if}
{#if $razao > 1}
	<Note {titulo} {conteudo} {subtitulo}/>
{/if}