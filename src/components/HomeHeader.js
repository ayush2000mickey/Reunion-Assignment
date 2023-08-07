import React from "react";
import { Box, Icon, Text } from "@chakra-ui/react";
import { SlEnvolopeLetter } from "react-icons/sl";

const HomeHeader = () => {
  return (
    <Box
      p={4}
      borderBottom="1px"
      borderColor="gray.200"
      boxShadow="xs"
      display="flex"
      alignItems="center"
      gap="1rem"
      height="9vh"
    >
      <Icon as={SlEnvolopeLetter} boxSize={7} color="purple.400" />
      <Text fontSize="lg" pt="0.3rem" fontWeight={500}>
        Reunion Assignment
      </Text>
    </Box>
  );
};

export default HomeHeader;
