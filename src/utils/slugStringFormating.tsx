export default function stringToSlug(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Supprime les accents
    .replace(/[^a-z0-9 -]/g, '') // Supprime les caractères non-alphanumériques, sauf les espaces et tirets
    .replace(/\s+/g, '-') // Remplace les espaces par des tirets
    .replace(/-+/g, '-'); // Remplace les tirets multiples par un seul tiret
}
