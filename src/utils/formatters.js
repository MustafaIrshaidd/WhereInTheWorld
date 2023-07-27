// Formatters

export const formatNum_EN_IN = (number) => {
  return new Intl.NumberFormat("en-IN").format(number);
};

export const arrToString = (object) => {
  if (typeof object !== "object") return "";

  const data = Object.values(object);
  return data.join(" , ");
};

export const currenciesToString = (object) => {
  if (typeof object !== "object") return "";

  const arr = Object.values(object);
  return arr.map((val) => val.name || "Unknown").join(" , ");
};
