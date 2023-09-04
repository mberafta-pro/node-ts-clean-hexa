export const isEmpty = (value: string) => value.trim().length === 0;

export const isLongerThan = (value: string, minLength: number) => value.length >= minLength;
