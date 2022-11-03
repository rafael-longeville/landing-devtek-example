import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
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
            <a href="">
              {" "}
              <Box>
                <Text fontSize="2vh">Home</Text>
              </Box>
            </a>
            <a href="">
              <Box>
                <Text fontSize="2vh">Services</Text>
              </Box>
            </a>
            <a href="">
              <Box>
                <Text fontSize="2vh">Pricing Example</Text>
              </Box>
            </a>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default Navbar;
