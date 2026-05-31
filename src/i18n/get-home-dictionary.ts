import { normalizeLanguage } from '@/i18n/config';
import { home as en } from '@/i18n/dictionaries/en/home';
import { home as ro } from '@/i18n/dictionaries/ro/home';

export function getHomeDictionary(language: string) {
  return normalizeLanguage(language) === 'ro' ? ro : en;
}
