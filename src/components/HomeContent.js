import { Box, Button, Grid, GridItem, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItemOption,
  MenuOptionGroup,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  getSelectedFilters,
  multiFilterHandler,
} from "../utilities/filterLogic";
import Properties from "./Properties";

const inintialFilterState = {
  bhk: {
    bhk1: false,
    bhk2: false,
    bhk3: false,
    bhk4: false,
  },
  furnish: {
    semi: false,
    fully: false,
  },
  preferredTenants: {
    family: false,
    bachelor: false,
    company: false,
  },
  location: {
    delhi: false,
    noida: false,
    gurugram: false,
    indore: false,
    banglore: false,
  },
};

const HomeContent = ({ dummyProperties }) => {
  const [filters, setFilters] = useState(inintialFilterState);
  const [filteredProperties, setFilteredProperties] = useState(dummyProperties);

  const handleFilterChange = (filterName, filterValue) => {
    setFilters((prev) => ({
      ...prev,
      [filterName]: {
        ...prev[filterName],
        [filterValue]: !prev[filterName][filterValue],
      },
    }));
  };

  const applyFilterHandler = () => {
    const selectedFilters = getSelectedFilters(filters);
    setFilteredProperties(multiFilterHandler(dummyProperties, selectedFilters));
  };

  useEffect(() => {
    setFilteredProperties(dummyProperties);
  }, [dummyProperties]);

  return (
    <Box
      px={{ base: "1rem", md: "4rem" }}
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      py={4}
    >
      <Text fontSize={{ base: "1.5rem", md: "2rem" }} fontWeight={600}>
        Search Properties to Rent
      </Text>
      <Grid
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexWrap="wrap"
        gap={4}
        py={8}
      >
        <GridItem h="10">
          <Menu closeOnSelect={false}>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              BHK Type
            </MenuButton>
            <MenuList>
              <MenuOptionGroup title="BHK Type" type="checkbox">
                <MenuItemOption
                  isChecked={filters.bhk.bhk1}
                  value="1 BHK"
                  onClick={() => handleFilterChange("bhk", "bhk1")}
                >
                  1 BHK
                </MenuItemOption>
                <MenuItemOption
                  isChecked={filters.bhk.bhk2}
                  value="2 BHK"
                  onClick={() => handleFilterChange("bhk", "bhk2")}
                >
                  2 BHK
                </MenuItemOption>
                <MenuItemOption
                  isChecked={filters.bhk.bhk3}
                  value="3 BHK"
                  onClick={() => handleFilterChange("bhk", "bhk3")}
                >
                  3 BHK
                </MenuItemOption>
                <MenuItemOption
                  isChecked={filters.bhk.bhk4}
                  value="4 BHK"
                  onClick={() => handleFilterChange("bhk", "bhk4")}
                >
                  4 BHK
                </MenuItemOption>
              </MenuOptionGroup>
            </MenuList>
          </Menu>
        </GridItem>
        <GridItem h="10">
          <Menu closeOnSelect={false}>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              Furnishing
            </MenuButton>
            <MenuList>
              <MenuOptionGroup title="Furnishing" type="checkbox">
                <MenuItemOption
                  isChecked={filters.furnish.fully}
                  value="Fully Furnished"
                  onClick={() => handleFilterChange("furnish", "fully")}
                >
                  Fully Furnished
                </MenuItemOption>
                <MenuItemOption
                  isChecked={filters.furnish.semi}
                  value="Semi Furnished"
                  onClick={() => handleFilterChange("furnish", "semi")}
                >
                  Semi Furnished
                </MenuItemOption>
              </MenuOptionGroup>
            </MenuList>
          </Menu>
        </GridItem>
        <GridItem h="10">
          <Menu closeOnSelect={false}>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              Preferred Tenants
            </MenuButton>
            <MenuList>
              <MenuOptionGroup title="Preferred Tenants" type="checkbox">
                <MenuItemOption
                  isChecked={filters.preferredTenants.family}
                  value="Family"
                  onClick={() =>
                    handleFilterChange("preferredTenants", "family")
                  }
                >
                  Family
                </MenuItemOption>
                <MenuItemOption
                  isChecked={filters.preferredTenants.bachelor}
                  value="Bachelor"
                  onClick={() =>
                    handleFilterChange("preferredTenants", "bachelor")
                  }
                >
                  Bachelor
                </MenuItemOption>
                <MenuItemOption
                  isChecked={filters.preferredTenants.company}
                  value="Company"
                  onClick={() =>
                    handleFilterChange("preferredTenants", "company")
                  }
                >
                  Company
                </MenuItemOption>
              </MenuOptionGroup>
            </MenuList>
          </Menu>
        </GridItem>
        <GridItem h="10">
          <Menu closeOnSelect={false}>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              Location
            </MenuButton>
            <MenuList>
              <MenuOptionGroup title="Location" type="checkbox">
                <MenuItemOption
                  isChecked={filters.location.delhi}
                  value="Delhi"
                  onClick={() => handleFilterChange("location", "delhi")}
                >
                  Delhi
                </MenuItemOption>
                <MenuItemOption
                  isChecked={filters.location.noida}
                  value="Noida"
                  onClick={() => handleFilterChange("location", "noida")}
                >
                  Noida
                </MenuItemOption>
                <MenuItemOption
                  isChecked={filters.location.gurugram}
                  value="Gurugram"
                  onClick={() => handleFilterChange("location", "gurugram")}
                >
                  Gurugram
                </MenuItemOption>
                <MenuItemOption
                  isChecked={filters.location.indore}
                  value="Indore"
                  onClick={() => handleFilterChange("location", "indore")}
                >
                  Indore
                </MenuItemOption>
                <MenuItemOption
                  isChecked={filters.location.banglore}
                  value="Banglore"
                  onClick={() => handleFilterChange("location", "banglore")}
                >
                  Banglore
                </MenuItemOption>
              </MenuOptionGroup>
            </MenuList>
          </Menu>
        </GridItem>
        <GridItem h="10">
          <Button colorScheme="purple" onClick={applyFilterHandler}>
            Search
          </Button>
        </GridItem>
      </Grid>
      <Properties properties={filteredProperties} />
    </Box>
  );
};

export default HomeContent;
