
export const required = input => input ? undefined : 'Required field';

export const nonEmpty = input => input.trim() !== '' ? undefined : 'Cannot be empty';

export const exactLength = input => input.length === 5 ? undefined : 'Must be 5 characters long';

export const numbersOnly = input => isNaN(input) === false ? undefined : 'Numbers only';