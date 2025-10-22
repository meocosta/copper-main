import { t } from "$lib/stores/language";

type conteudo = {id: number; title: string; body: string }

export function Conteudo(path: string): Array<conteudo> {
    let qttd = Number(t(path + ".qttd"));
    let array: Array<conteudo> = [];

    for (let i = 1; i <= qttd; i++) {
        array.push({
            id: i,
            title: t(path + ".doc" + i + ".titulo"),
            body: Paragrafo(path + ".doc" + i)
        }
        )
    }
    return array;
}

export function Paragrafo(totalpath: string): string {
    let retorno: string = "";
    let qttd = Number(t(totalpath + ".qttd"));
    for (let i = 1; i <= qttd; i++) {

        retorno += " " + t(totalpath + ".prgf" + i)
    }
    return retorno;
}