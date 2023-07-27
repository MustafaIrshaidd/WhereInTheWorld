// Filtering based on dropDownMenu

export const filterFlagsData = (region, country, data) => {
  country = country.toLowerCase();

  let filteredByRegion = data || [];

  if (region) {
    filteredByRegion = filteredByRegion.filter((data) => {
      return data.region === region;
    });
  }

  console.log(region, country);

  if (!country.length) {
    return filteredByRegion;
  }

  let filteredByCountry = filteredByRegion.filter((data) => {
    return data.name.common.toLowerCase().includes(country);
  });

  return filteredByCountry;
};
