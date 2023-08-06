// Format Number

export const formatNumber = (number, format) => {
  return new Intl.NumberFormat(format).format(number);
};
