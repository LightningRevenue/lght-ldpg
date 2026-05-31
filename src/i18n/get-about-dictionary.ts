import { normalizeLanguage } from '@/i18n/config';
import { about as en } from '@/i18n/dictionaries/en/about';
import { about as ro } from '@/i18n/dictionaries/ro/about';

export function getAboutDictionary(language: string) {
  return normalizeLanguage(language) === 'ro' ? ro : en;
}
