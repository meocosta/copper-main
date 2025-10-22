import {viewheight, viewwidth, razao, height, categoria} from "../stores/tela";
import {lang} from "../stores/language";
import { get } from "svelte/store";

export function mudarlinguagem(language : string){
    lang.set(language);
}

export function definecategoria(){
    let r : number = get(razao);
    switch(r){
        case 1: 
            categoria.set(1);
        break;
        case 0.75: 
            categoria.set(0.75);
        break;
        case 0.63: 
            categoria.set(0.63);
        break;
        case 0.5: 
            categoria.set(0.5);
        break;
    }
}

export function atualizatela(vheight : number, vwidth : number) {
    razao.set(vwidth/vheight);
    viewheight.set(vheight);
    viewwidth.set(vwidth);
}