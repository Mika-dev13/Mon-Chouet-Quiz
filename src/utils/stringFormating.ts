import exp from 'constants';

function stringToSlug(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Supprime les accents
    .replace(/[^a-z0-9 -]/g, '') // Supprime les caractères non-alphanumériques, sauf les espaces et tirets
    .replace(/\s+/g, '-') // Remplace les espaces par des tirets
    .replace(/-+/g, '-'); // Remplace les tirets multiples par un seul tiret
}

const removeAccents = (str: string) => {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};

const isMatch = (title: string, searchTerm: string) => {
  const normalizedTitle = removeAccents(title.toLowerCase());
  const normalizedSearchTerm = removeAccents(searchTerm.toLowerCase());

  let searchIndex = 0;

  for (let i = 0; i < normalizedTitle.length; i++) {
    if (normalizedTitle[i] === normalizedSearchTerm[searchIndex]) {
      searchIndex++;
    }
    if (searchIndex === normalizedSearchTerm.length) {
      return true;
    }
  }

  return searchIndex === normalizedSearchTerm.length;
};

export { stringToSlug, removeAccents, isMatch };
