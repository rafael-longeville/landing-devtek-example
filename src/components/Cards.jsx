import React from "react";
import {
  Box,
  Text,
  Stack,
  List,
  ListItem,
  ListIcon,
  Button,
  useColorModeValue,
  Grid,
  GridItem,
  Container,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

const Cards = () => {
  return (
    <>
      <Container maxW={"7xl"} pt="10vh" pb="10vh" id="services">
        <Grid
          templateColumns={{ base: null, md: null, lg: "1fr 1fr 1fr" }}
          templateRows={{
            base: "1fr 1fr 1fr",
            md: "0fr",
            lg: "0fr",
          }}
          gap="10vw"
        >
          <GridItem>
            <Box
              maxW={"500px"}
              w={"full"}
              bg={useColorModeValue("white", "gray.800")}
              boxShadow={"2xl"}
              rounded={"md"}
              overflow={"hidden"}
            >
              <Stack
                textAlign={"center"}
                p={6}
                color={useColorModeValue("gray.800", "white")}
                align={"center"}
              >
                <Text
                  fontSize={"sm"}
                  fontWeight={500}
                  bg={"#576CC0"}
                  p={2}
                  px={3}
                  color={"white"}
                  rounded={"full"}
                >
                  Hobby
                </Text>
                <Stack direction={"row"} align={"center"} justify={"center"}>
                  <Text fontSize={"3xl"}>$</Text>
                  <Text fontSize={"6xl"} fontWeight={800}>
                    79
                  </Text>
                  <Text color={"gray.500"}>/month</Text>
                </Stack>
              </Stack>

              <Box bg={useColorModeValue("gray.50", "gray.900")} px={6} py={10}>
                <List spacing={3}>
                  <ListItem>
                    <ListIcon as={CheckIcon} color="#576CC0" />
                    5.000 page views
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckIcon} color="#576CC0" />
                    50 automation executions
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckIcon} color="#576CC0" />
                    50 identified users
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckIcon} color="#576CC0" />
                    Limited features
                  </ListItem>
                </List>

                <Button
                  mt={10}
                  w={"full"}
                  bg={"#576CC0"}
                  color={"white"}
                  rounded={"xl"}
                  _hover={{
                    bgColor: "#395AD2",
                  }}
                  boxShadow={"0 5px 20px 0px rgb(58 85 196 / 43%)"}
                >
                  Start your trial
                </Button>
              </Box>
            </Box>
          </GridItem>
          <GridItem>
            <Box
              maxW={"500px"}
              w={"full"}
              bg={useColorModeValue("white", "gray.800")}
              boxShadow={"2xl"}
              rounded={"md"}
              overflow={"hidden"}
            >
              <Stack
                textAlign={"center"}
                p={6}
                color={useColorModeValue("gray.800", "white")}
                align={"center"}
              >
                <Text
                  fontSize={"sm"}
                  fontWeight={500}
                  bg={"#576CC0"}
                  p={2}
                  px={3}
                  color={"white"}
                  rounded={"full"}
                >
                  Pro
                </Text>
                <Stack direction={"row"} align={"center"} justify={"center"}>
                  <Text fontSize={"3xl"}>$</Text>
                  <Text fontSize={"6xl"} fontWeight={800}>
                    149
                  </Text>
                  <Text color={"gray.500"}>/month</Text>
                </Stack>
              </Stack>

              <Box bg={useColorModeValue("gray.50", "gray.900")} px={6} py={10}>
                <List spacing={3}>
                  <ListItem>
                    <ListIcon as={CheckIcon} color="#576CC0" />
                    10.000 page views
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckIcon} color="#576CC0" />
                    500 automation executions
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckIcon} color="#576CC0" />
                    100 identified users
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckIcon} color="#576CC0" />
                    All features
                  </ListItem>
                </List>

                <Button
                  mt={10}
                  w={"full"}
                  bg={"#576CC0"}
                  color={"white"}
                  rounded={"xl"}
                  _hover={{
                    bgColor: "#395AD2",
                  }}
                  boxShadow={"0 5px 20px 0px rgb(58 85 196 / 43%)"}
                >
                  Start your trial
                </Button>
              </Box>
            </Box>
          </GridItem>
          <GridItem>
            <Box
              maxW={"500px"}
              w={"full"}
              bg={useColorModeValue("white", "gray.800")}
              boxShadow={"2xl"}
              rounded={"md"}
              overflow={"hidden"}
            >
              <Stack
                textAlign={"center"}
                p={6}
                color={useColorModeValue("gray.800", "white")}
                align={"center"}
              >
                <Text
                  fontSize={"sm"}
                  fontWeight={500}
                  bg={"#576CC0"}
                  p={2}
                  px={3}
                  color={"white"}
                  rounded={"full"}
                >
                  Team
                </Text>
                <Stack direction={"row"} align={"center"} justify={"center"}>
                  <Text fontSize={"3xl"}>$</Text>
                  <Text fontSize={"6xl"} fontWeight={800}>
                    499
                  </Text>
                  <Text color={"gray.500"}>/month</Text>
                </Stack>
              </Stack>

              <Box bg={useColorModeValue("gray.50", "gray.900")} px={6} py={10}>
                <List spacing={3}>
                  <ListItem>
                    <ListIcon as={CheckIcon} color="#576CC0" />
                    100.000 page views
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckIcon} color="#576CC0" />
                    10.000 automation executions
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckIcon} color="#576CC0" />
                    500 identified users
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckIcon} color="#576CC0" />
                    All features & Private coaching
                  </ListItem>
                </List>

                <Button
                  mt={10}
                  w={"full"}
                  bg={"#576CC0"}
                  color={"white"}
                  rounded={"xl"}
                  _hover={{
                    bgColor: "#395AD2",
                  }}
                  boxShadow={"0 5px 20px 0px rgb(58 85 196 / 43%)"}
                >
                  Start your trial
                </Button>
              </Box>
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </>
  );
};

export default Cards;
