export const titleCase = (str) => str[0].toUpperCase() + str.slice(1);

export const roundOff = (num) => Math.round((num + Number.EPSILON) * 100) / 100;