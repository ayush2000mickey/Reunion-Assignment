export const getSelectedFilters = (filters) => {
  const selectedFilterKeys = {
    bhk: [],
    furnish: [],
    preferredTenants: [],
    location: [],
  };

  const { bhk, furnish, preferredTenants, location } = filters;

  for (let bhkKey in bhk) {
    if (bhk[bhkKey]) selectedFilterKeys.bhk.push(bhkKey);
  }
  for (let furnishKey in furnish) {
    if (furnish[furnishKey]) selectedFilterKeys.furnish.push(furnishKey);
  }
  for (let preferredTenantsKey in preferredTenants) {
    if (preferredTenants[preferredTenantsKey])
      selectedFilterKeys.preferredTenants.push(preferredTenantsKey);
  }
  for (let locationKey in location) {
    if (location[locationKey]) selectedFilterKeys.location.push(locationKey);
  }

  return selectedFilterKeys;
};

const initialFilter = {
  bhk: [],
  furnish: [],
  preferredTenants: [],
  location: [],
};

export const multiFilterHandler = (properties, filters) => {
  console.log({ filters });
  if (filters === initialFilter) return properties;
  const filterKeys = Object.keys(filters);
  return properties.filter((property) => {
    return filterKeys.every((key) => {
      if (!filters[key].length) return true;

      if (Array.isArray(property[key])) {
        return property[key].some((keyEle) => filters[key].includes(keyEle));
      }
      return filters[key].includes(property[key]);
    });
  });
};
