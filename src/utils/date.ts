import { formatDistance } from 'date-fns';
import type { Locale } from 'date-fns';

type Options = {
  includeSeconds?: boolean | undefined;
  addSuffix?: boolean | undefined;
  locale?: Locale | undefined;
};

export const getDistanceFromNow = (date: Date, options?: Options) => {
  const now = new Date();
  const distance = formatDistance(date, now, options);
  return `${distance} ago`;
};
