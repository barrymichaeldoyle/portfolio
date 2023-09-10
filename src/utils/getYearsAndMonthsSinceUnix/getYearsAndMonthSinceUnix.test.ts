import { getYearsAndMonthsSinceUnix } from './getYearsAndMonthsSinceUnix';

describe('getYearsAndMonthSinceUnix', () => {
  it('should return "less than a month" for a recent date', () => {
    const unixTime = Math.floor(Date.now() / 1000) - 500; // Very recent date
    expect(getYearsAndMonthsSinceUnix(unixTime)).toBe('less than a month');
  });

  it('should return correct string for a date 5 months ago', () => {
    const date = new Date();
    date.setMonth(date.getMonth() - 5);
    const unixTime = Math.floor(date.getTime() / 1000);
    expect(getYearsAndMonthsSinceUnix(unixTime)).toBe('5 months');
  });

  it('should return correct string for a date 3 years ago', () => {
    const date = new Date();
    date.setFullYear(date.getFullYear() - 3);
    const unixTime = Math.floor(date.getTime() / 1000);
    expect(getYearsAndMonthsSinceUnix(unixTime)).toBe('3 years');
  });

  it('should return correct string for a date 2 years and 6 months ago', () => {
    const date = new Date();
    date.setFullYear(date.getFullYear() - 2);
    date.setMonth(date.getMonth() - 6);
    const unixTime = Math.floor(date.getTime() / 1000);
    expect(getYearsAndMonthsSinceUnix(unixTime)).toBe('2 years and 6 months');
  });

  it('should correctly adjust years and months when past date month is greater than current date month', () => {
    const date = new Date();
    date.setFullYear(date.getFullYear() - 2);
    date.setMonth(date.getMonth() + 1); // Setting a month greater than the current month
    const unixTime = Math.floor(date.getTime() / 1000);
    expect(getYearsAndMonthsSinceUnix(unixTime)).toBe('1 year and 11 months');
  });

  it('should return "1 month" for a date 1 month ago', () => {
    const date = new Date();
    date.setMonth(date.getMonth() - 1);
    const unixTime = Math.floor(date.getTime() / 1000);
    expect(getYearsAndMonthsSinceUnix(unixTime)).toBe('1 month');
  });

  it('should return "2 months" for a date 2 months ago', () => {
    const date = new Date();
    date.setMonth(date.getMonth() - 2);
    const unixTime = Math.floor(date.getTime() / 1000);
    expect(getYearsAndMonthsSinceUnix(unixTime)).toBe('2 months');
  });
});
