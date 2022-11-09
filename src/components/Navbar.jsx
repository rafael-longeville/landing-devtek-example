import React from "react";
import { Flex, Text, Box } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <>
      <Flex justify="center" align="center" h="15vh" p="4vh">
        <Box w="30%">
          <Flex justify="space-around" align="center">
            <a href="#home">
              {" "}
              <Box>
                <Text fontSize="2vh">Home</Text>
              </Box>
            </a>
            <a href="#cards">
              <Box>
                <Text fontSize="2vh">Services</Text>
              </Box>
            </a>
            <a href="#testimonials">
              <Box>
                <Text fontSize="2vh">Testimonials</Text>
              </Box>
            </a>
          </Flex>
        </Box>
        <Box>
          <Text color="#576CC0" fontSize="6.5vh" fontWeight="bold">
            Your Company Name
          </Text>
        </Box>
      </Flex>
    </>
  );
};

export default Navbar;
