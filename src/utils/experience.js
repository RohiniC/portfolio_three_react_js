const EXPERIENCE_START = new Date('2011-06-01T00:00:00Z');

/**
 * Calculate whole years of experience from the configured start date until the provided date.
 * Ensures accuracy around anniversary boundaries so messaging stays consistent year-round.
 */
export const getYearsOfExperience = (referenceDate = new Date()) => {
  const current = new Date(referenceDate);

  let years = current.getFullYear() - EXPERIENCE_START.getFullYear();

  const hasReachedAnniversary =
    current.getMonth() > EXPERIENCE_START.getMonth() ||
    (current.getMonth() === EXPERIENCE_START.getMonth() && current.getDate() >= EXPERIENCE_START.getDate());

  if (!hasReachedAnniversary) {
    years -= 1;
  }

  return Math.max(years, 0);
};
