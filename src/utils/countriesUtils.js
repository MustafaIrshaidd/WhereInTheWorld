// Filtering based on dropDownMenu

export const filterCountriesData = (region, country, data, favouriteData) => {
  country = country.toLowerCase();

  let filteredByRegion = data || [];

  if (region === "Favourites") {
    filteredByRegion = filteredByRegion.filter((country) => {
      return favouriteData.hasOwnProperty(country.name.common);
    });
  } else if (region) {
    filteredByRegion = filteredByRegion.filter((data) => {
      return data.region === region;
    });
  }

  if (!country.length) {
    return filteredByRegion;
  }

  let filteredByCountry = filteredByRegion.filter((data) => {
    return data.name.common.toLowerCase().includes(country);
  });

  return filteredByCountry;
};

export const joinCurrenciesToString = (object, separator) => {
  if (typeof object !== "object") return "";

  const arr = Object.values(object);
  return arr.map((val) => val.name || "Unknown").join(separator);
};
