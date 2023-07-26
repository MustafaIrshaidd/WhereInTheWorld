// Formatters

export const formatNum_EN_IN = (number) => {
  return new Intl.NumberFormat("en-IN").format(number);
};

export const arrToString = (object) => {
  const data = Object.values(object);
  return data.join(" , ");
};

export const currenciesToString = (object) => {
  const arr = Object.values(object);
  return arr.map((val) => val.name || "Unknown").join(" , ");
};
