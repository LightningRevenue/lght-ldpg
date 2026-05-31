import { normalizeLanguage } from '@/i18n/config';
import { common as en } from '@/i18n/dictionaries/en/common';
import { common as ro } from '@/i18n/dictionaries/ro/common';

export function getCommonDictionary(language: string) {
  return normalizeLanguage(language) === 'ro' ? ro : en;
}
