export const joinObjectValuesToString = (object, separator) => {
  if (typeof object !== "object") return "";
  const data = Object.values(object);
  return data.join(separator);
};

// Function to add an item to the object
export const addItemToObject = (object, key, value) => {
  return (object) => ({
    ...object,
    [key]: value,
  });
};

// Function to remove an item from the object
export const removeItemFromObject = (object, key) => {
  const updatedObject = { ...object };
  delete updatedObject[key];
  return updatedObject;
};
