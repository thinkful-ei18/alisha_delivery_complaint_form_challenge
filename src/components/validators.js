
export const required = input => input ? undefined : 'Error: required field';

export const nonEmpty = input => input.trim() !== '' ? undefined : 'Error: cannot be empty';

export const exactLength = input => input.length === 5 ? undefined : 'Error: must be 5 characters long';

export const numbersOnly = input => isNaN(input) === false ? undefined : 'Error: numbers only';