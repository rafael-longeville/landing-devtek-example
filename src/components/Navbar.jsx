import React from "react";
import { Flex, Text, Box } from "@chakra-ui/react";

const Navbar = () => {

  return (
    <>
      <Flex justify="space-between" align="center" h="15vh" p="4vh">
        <Box>
          <Text color="#00df9a"fontSize="5vh">Your Company Name</Text>
        </Box>
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
      </Flex>
    </>
  );
};

export default Navbar;
