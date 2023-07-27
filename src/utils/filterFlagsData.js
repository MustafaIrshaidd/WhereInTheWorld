// Filtering based on dropDownMenu

export const filterFlagsData = (region, country, data, favouriteData) => {
  country = country.toLowerCase();
  
  let filteredByRegion = data || [];

  if (region == "Favourites") {
    filteredByRegion = filteredByRegion.filter((country) => {
      return favouriteData.hasOwnProperty(country.name.common);
    });
  }
  else if (region) {
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
