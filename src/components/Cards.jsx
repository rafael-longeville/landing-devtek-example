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
  Flex,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";


const Cards = () => {
  return (
    <>
      <Box id="cards" bg="white" h="100vh">
        <Flex justify="center" pt="5vh" direction="column" align="center">
          <Text fontSize="5vh" fontWeight="bold" color="gray.900" pb="10vh">
            Services examples for a landing page
          </Text>
          <Grid templateColumns="1fr 1fr 1fr" gap="10vw">
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
                    bg={useColorModeValue("green.50", "green.900")}
                    p={2}
                    px={3}
                    color={"green.500"}
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

                <Box
                  bg={useColorModeValue("gray.50", "gray.900")}
                  px={6}
                  py={10}
                >
                  <List spacing={3}>
                    <ListItem>
                      <ListIcon as={CheckIcon} color="green.400" />
                      5.000 page views
                    </ListItem>
                    <ListItem>
                      <ListIcon as={CheckIcon} color="green.400" />
                      50 automation executions
                    </ListItem>
                    <ListItem>
                      <ListIcon as={CheckIcon} color="green.400" />
                      50 identified users
                    </ListItem>
                    <ListItem>
                      <ListIcon as={CheckIcon} color="green.400" />
                      Limited features
                    </ListItem>
                  </List>

                  <Button
                    mt={10}
                    w={"full"}
                    bg={"green.400"}
                    color={"white"}
                    rounded={"xl"}
                    boxShadow={"0 5px 20px 0px rgb(72 187 120 / 43%)"}
                    _hover={{
                      bg: "green.500",
                    }}
                    _focus={{
                      bg: "green.500",
                    }}
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
                    bg={useColorModeValue("green.50", "green.900")}
                    p={2}
                    px={3}
                    color={"green.500"}
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

                <Box
                  bg={useColorModeValue("gray.50", "gray.900")}
                  px={6}
                  py={10}
                >
                  <List spacing={3}>
                    <ListItem>
                      <ListIcon as={CheckIcon} color="green.400" />
                      10.000 page views
                    </ListItem>
                    <ListItem>
                      <ListIcon as={CheckIcon} color="green.400" />
                      500 automation executions
                    </ListItem>
                    <ListItem>
                      <ListIcon as={CheckIcon} color="green.400" />
                      100 identified users
                    </ListItem>
                    <ListItem>
                      <ListIcon as={CheckIcon} color="green.400" />
                      All features
                    </ListItem>
                  </List>

                  <Button
                    mt={10}
                    w={"full"}
                    bg={"green.400"}
                    color={"white"}
                    rounded={"xl"}
                    boxShadow={"0 5px 20px 0px rgb(72 187 120 / 43%)"}
                    _hover={{
                      bg: "green.500",
                    }}
                    _focus={{
                      bg: "green.500",
                    }}
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
                    bg={useColorModeValue("green.50", "green.900")}
                    p={2}
                    px={3}
                    color={"green.500"}
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

                <Box
                  bg={useColorModeValue("gray.50", "gray.900")}
                  px={6}
                  py={10}
                >
                  <List spacing={3}>
                    <ListItem>
                      <ListIcon as={CheckIcon} color="green.400" />
                      100.000 page views
                    </ListItem>
                    <ListItem>
                      <ListIcon as={CheckIcon} color="green.400" />
                      10.000 automation executions
                    </ListItem>
                    <ListItem>
                      <ListIcon as={CheckIcon} color="green.400" />
                      500 identified users
                    </ListItem>
                    <ListItem>
                      <ListIcon as={CheckIcon} color="green.400" />
                      All features & Private coaching
                    </ListItem>
                  </List>

                  <Button
                    mt={10}
                    w={"full"}
                    bg={"green.400"}
                    color={"white"}
                    rounded={"xl"}
                    boxShadow={"0 5px 20px 0px rgb(72 187 120 / 43%)"}
                    _hover={{
                      bg: "green.500",
                    }}
                    _focus={{
                      bg: "green.500",
                    }}
                  >
                    Start your trial
                  </Button>
                </Box>
              </Box>
            </GridItem>
          </Grid>
        </Flex>
      </Box>
    </>
  );
};

export default Cards;
