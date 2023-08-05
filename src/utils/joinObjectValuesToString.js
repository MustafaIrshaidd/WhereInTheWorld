export const joinObjectValuesToString = (object, separator) => {
  if (typeof object !== "object") return "";

  const data = Object.values(object);
  return data.join(separator);
};
