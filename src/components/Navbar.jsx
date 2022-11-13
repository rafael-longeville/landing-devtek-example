import React from "react";
import {
  Flex,
  Text,
  Box,
  Grid,
  GridItem,
  Container,
  Divider,
} from "@chakra-ui/react";

const Navbar = () => {
  return (
    <>
      <Box pb="10vh">
        <Container maxW={"7xl"} pt="1vh">
          <Grid
            templateColumns={{ base: "1fr 1fr", md: "1fr 1fr", lg: "3fr 1fr" }}
          >
            <GridItem>
              <Text
                color="#576CC0"
                fontSize={{ base: "xl", md: "2xl", lg: "4xl" }}
                fontWeight="bold"
              >
                Devtek Solutions
              </Text>
            </GridItem>
            <GridItem align="center">
              <Flex justify="space-evenly" align="center" h="100%">
                <Box>
                  <a href="">
                    <Text
                      _hover={{
                        textColor: "white",
                      }}
                      color="whiteAlpha.800"
                      fontSize={{ base: "xs", md: "md", lg: "xl" }}
                    >
                      Services
                    </Text>
                  </a>
                </Box>
                <Box>
                  <a href="">
                    <Text
                      _hover={{
                        textColor: "white",
                      }}
                      color="whiteAlpha.800"
                      fontSize={{ base: "xs", md: "md", lg: "xl" }}
                    >
                      Testimonials
                    </Text>
                  </a>
                </Box>
              </Flex>
            </GridItem>
          </Grid>
        </Container>
        <Divider />
      </Box>
    </>
  );
};

export default Navbar;
