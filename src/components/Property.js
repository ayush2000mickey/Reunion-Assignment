import { Card, CardBody, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

const Property = ({ property }) => {
  return (
    <Card width="100%">
      <CardBody>
        <Image
          src={property.propertyImg}
          alt={property.propertyName}
          borderRadius="lg"
          width="100%"
        />
        <Stack mt="6" spacing="1">
          <Heading size="md">{property.propertyName}</Heading>
          <Text textTransform="uppercase" color="green.400">
            BHK Type : {property.bhk.join(" | ")}
          </Text>
          <Text textTransform="capitalize" color="blue.600">
            Furnishing : {property.furnish.join(" , ")}
          </Text>
          <Text textTransform="capitalize">
            Preferred Tenants : {property.preferredTenants.join(" | ")}
          </Text>
          <Text textTransform="capitalize" color="orange.400">
            Location : {property.location.join(" | ")}
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default Property;
