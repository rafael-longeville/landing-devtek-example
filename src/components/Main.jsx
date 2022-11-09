import React from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  Grid,
  GridItem,
  Image,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Laptop2 from "../assets/laptop2.png";
const Main = () => {
  return (
    <Box mt="10vh" h="80vh" id="#home">
      <Flex justify="center" align="center">
        <Grid templateColumns="1fr 1fr">
          <GridItem>
            <Flex direction="column" justify="center">
              <Box mb="5vh">
                <Text color="#576CC0" fontWeight="bold" fontSize="4vh">
                  Contact our agency for creating <br></br>your application
                </Text>
              </Box>
              <Box pt="2vh">
                <Text color="white" fontWeight="bold" fontSize="4vh">
                  Grow your audience,
                </Text>
              </Box>
              <Box as={motion.div}>
                <Flex /* align="center" */ direction="column">
                  <Box pr="1vw">
                    <Text color="white" fontWeight="bold" fontSize="3vh">
                      with fast and flexible solutions for BTB and BTC companies
                    </Text>
                  </Box>
                </Flex>
              </Box>
              <Box pt="5vh">
                <Text color="gray" fontWeight="bold" fontSize="2vh">
                  Increase the quality of your leads with Devtek Solutions
                </Text>
              </Box>
              <Box as={motion.div} pt="5vh">
                <Button
                  bgColor="#576CC0"
                  p="5"
                  borderRadius="5"
                  h="5vh"
                  onClick={() => {
                    window.location.href = "#cards";
                  }}
                >
                  <Text>See our services examples</Text>{" "}
                </Button>
              </Box>
            </Flex>
          </GridItem>
          <GridItem alignSelf="center" justifySelf="center">
            <Image src={Laptop2} h="60vh"></Image>
          </GridItem>
        </Grid>
      </Flex>
    </Box>
  );
};
export default Main;
