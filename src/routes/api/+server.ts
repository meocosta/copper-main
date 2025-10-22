import { json } from '@sveltejs/kit';
import fs from 'fs';
import path from 'path';

function getFilePath(lang: string) {
  return path.resolve(`src/lib/translations/${lang}.json`);
}

function loadTranslations(lang: string) {
  const filePath = getFilePath(lang);
  const data = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(data);
}

function saveTranslations(lang: string, data: object) {
  const filePath = getFilePath(lang);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

export async function GET({ url }: { url: URL }) {
  const lang = url.searchParams.get('lang') || 'en-us';
  const translations = loadTranslations(lang);
  return json(translations);
}

export async function POST({ request }: { request: Request }) {
  const { lang = 'en-us', path: jsonPath, value } = await request.json();
  const translations = loadTranslations(lang);

  const keys = jsonPath.split('.');
  let obj: any = translations;

  for (let i = 0; i < keys.length - 1; i++) {
    if (!obj[keys[i]]) obj[keys[i]] = {};
    obj = obj[keys[i]];
  }

  obj[keys[keys.length - 1]] = value;

  saveTranslations(lang, translations);

  return json({ success: true, lang, updated: { [jsonPath]: value } });
}
