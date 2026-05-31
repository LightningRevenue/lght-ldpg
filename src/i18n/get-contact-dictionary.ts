import { normalizeLanguage } from '@/i18n/config';
import { contact as en } from '@/i18n/dictionaries/en/contact';
import { contact as ro } from '@/i18n/dictionaries/ro/contact';

export function getContactDictionary(language: string) {
  return normalizeLanguage(language) === 'ro' ? ro : en;
}
