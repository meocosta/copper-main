import { writable } from 'svelte/store';
import { LocationManager } from "$lib/functions/LocationManager";
import enUs from '$lib/locales/en_us.json';
import ptBr from '$lib/locales/pt_br.json';

const locationManager = new LocationManager({
    en_us: enUs,
    pt_br: ptBr,
});
export const lang = writable('pt_br');

lang.subscribe((value)=>{
    locationManager.useLocation(value);
})

export function t(w: string, vars?: Record<string, any>) {
    let tradução: string;
    if (vars) {
        tradução = locationManager.translateVars(w.toLowerCase(), vars);
    } else {
        tradução = locationManager.translate(w.toLowerCase());
    }
    return tradução;
}