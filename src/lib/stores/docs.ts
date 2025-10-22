import { writable } from 'svelte/store';

export type SecaoDocs = {
  nome: string;
  paragrafos: string[];
};

export const docs = writable<SecaoDocs[]>([]);
