// TODO: figure out how stackoverflow calculates it, because our function seems to round up
export function getYearsAndMonthsSinceUnix(unixTime: number): string {
  const now = new Date();
  const past = new Date(unixTime * 1000); // Convert UNIX timestamp to JavaScript timestamp

  let years = now.getFullYear() - past.getFullYear();
  let months = now.getMonth() - past.getMonth();

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const yearsStr = years ? `${years} year${years !== 1 ? 's' : ''}` : '';
  const monthsStr = months ? `${months} month${months !== 1 ? 's' : ''}` : '';

  if (years && months) {
    return `${yearsStr} and ${monthsStr}`;
  }
  if (years) {
    return `${yearsStr}`;
  }
  if (months) {
    return `${monthsStr}`;
  }

  return 'less than a month';
}
