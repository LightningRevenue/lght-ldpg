import { normalizeLanguage } from '@/i18n/config';
import { services as en } from '@/i18n/dictionaries/en/services';
import { services as ro } from '@/i18n/dictionaries/ro/services';

export function getServicesDictionary(language: string) {
  return normalizeLanguage(language) === 'ro' ? ro : en;
}
