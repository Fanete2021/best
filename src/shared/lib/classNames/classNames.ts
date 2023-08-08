export type Mods = Record<string, boolean | string | undefined>;

export function classNames(cls: string, mods: Mods = {}, additional: Array<string | undefined> = []): string {
  const filteredMods: string[] = Object.entries(mods)
    .filter(([ _, flag ]) => Boolean(flag))
    .map(([ className ]) => className);

  return [
    cls,
    ...filteredMods,
    ...additional.filter(Boolean)
  ].join(' ');
}