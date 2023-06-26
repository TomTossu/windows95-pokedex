export const titleCase = (str) => str[0].toUpperCase() + str.slice(1);

export const roundOff = (num) => Math.round((num + Number.EPSILON) * 100) / 100;

export function setBodyOverflow(property) {
  document.body.style.overflow = property;
}

export const handleClose = (event) => {
  event(false);
};
