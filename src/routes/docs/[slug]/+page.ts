// +page.ts
import type { PageLoad } from './$types';
import { Conteudo } from "../Conteudo";

interface ConteudoItem {
    id: number;
    title: string;
    body: string;
    slug: string;
}


const slugify = (s: string) =>
    String(s)
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');

export const load: PageLoad = ({ params }) => {

    const { slug } = params;

    // cria o map com slugs
    const map: ConteudoItem[] = Conteudo("docs").map((item) => ({
        ...item,
        slug: slugify(item.title)
    }));

    // encontra o item pelo slug
    const page = map.find((item) => item.slug === slug) ?? {
        id: 404,
        title: 'Não encontrado',
        body: 'Conteúdo não encontrado.'
    };

    return { slug: params.slug, id: page.id };
};
