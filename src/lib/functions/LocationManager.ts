/**
 * Adaptado para rodar dentro do src do Svelte (browser)
 * - Removidos imports e uso do fs/path (Node.js)
 * - Locais e traduções devem ser passados manualmente no construtor
 * 
 * Alteração feita por ChatGPT para adequar a execução em frontend
 */

type PossiblyRecursiveObject<T> = {
  [key: string]: T | PossiblyRecursiveObject<T>;
};

export class LocationManager {
  private locations: Record<string, PossiblyRecursiveObject<string>> = {};
  private currentLocationKey: string | null = null;

  /**
   * @param locationsObj Objeto onde a chave é o nome da localização (ex: "en_us")
   * e o valor é o conteúdo da tradução (JSON já convertido em objeto)
   * 
   * Exemplo:
   * {
   *   en_us: { foo: "bar", baz: { qux: "quux" } },
   *   pt_br: { foo: "barra", baz: { qux: "quix" } }
   * }
   */
  constructor(locationsObj: Record<string, PossiblyRecursiveObject<string>>) {
    this.locations = locationsObj;
  }

  public setLocations(locationsObj: Record<string, PossiblyRecursiveObject<string>>) {
    this.locations = locationsObj;
  }

  public getLocationKeys(): string[] {
    return Object.keys(this.locations);
  }

  public getLocationPath(location: string): PossiblyRecursiveObject<string> | undefined {
    return this.locations[location];
  }

  public translate(translationPath: string, defaultValue?: string): string {
    if (!this.currentLocationKey) {
      throw new Error("No location set. Please use useLocation() to set a location.");
    }

    const translationObject = this.locations[this.currentLocationKey];
    if (!translationObject) {
      throw new Error(`Location ${this.currentLocationKey} not found`);
    }

    const keys = translationPath.split(".");
    let translation: PossiblyRecursiveObject<string> | string = translationObject;
    for (const key of keys) {
      if ((translation as any)[key] === undefined) {
        if (defaultValue !== undefined) return defaultValue;
        throw new Error(`Translation ${translationPath} not found`);
      }
      translation = (translation as any)[key];
    }

    if (typeof translation !== "string") {
      if (defaultValue !== undefined) {
        return defaultValue;
      }
      throw new Error(`Translation ${translationPath} is not a string`);
    }

    return translation;
  }

  public translateVars(translationPath: string, vars: Record<string, string>, defaultValue?: string): string {
    let translation = this.translate(translationPath, defaultValue);
    if (defaultValue && translation === defaultValue) {
      return defaultValue;
    }

    for (const key in vars) {
      const regex = new RegExp(`\\$${key}`, "g");
      translation = translation.replace(regex, vars[key]);
    }

    return translation;
  }

  public useLocation(location: string) {
    if (!this.locations[location]) {
      throw new Error(`Location ${location} not found`);
    }
    this.currentLocationKey = location;
  }
}
