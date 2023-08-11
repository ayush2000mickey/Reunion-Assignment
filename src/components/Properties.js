import { Box } from "@chakra-ui/react";
import React from "react";
import Property from "./Property";

const Properties = ({ properties }) => {
  return (
    <Box>
      {properties?.length <= 0 ? (
        <Box
          height="full"
          width="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          No Properties Match Your Filters
        </Box>
      ) : (
        <Box
          height="100%"
          overflowY="scroll"
          display="grid"
          gridTemplateColumns={{
            base: "repeat(1,1fr)",
            md: "repeat(2,1fr)",
            lg: "repeat(3,1fr)",
          }}
          className="property_list"
          gap="1rem"
        >
          {properties.map((property) => {
            return <Property key={property.propertyId} property={property} />;
          })}
        </Box>
      )}
    </Box>
  );
};

export default Properties;
