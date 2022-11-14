import React from "react";
import { Box, Flex, Text, Button, Container } from "@chakra-ui/react";
import { motion } from "framer-motion";

const Main = () => {
  return (
    <Container
      maxW={"7xl"}
      pb={{ base: "5vh", md: "15vh", lg: "15vh" }}
      h={{ base: "90vh", md: "90vh", lg: "95vh" }}
    >
      <Flex direction="column" justify="center">
        <motion.div
        viewport={{ once: true }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5}}
        >
          <Box mb="5vh" mt={{ base: "5vh", lg: "15vh" }}>
            <Text
              align="center"
              fontWeight="bold"
              fontSize={{ base: "4xl", sm: "5xl", lg: "6xl" }}
              lineHeight={{ base: "1.5", md: "1.2", lg: "1.2" }}
            >
              Contact our agency for creating <br></br>your application
            </Text>
          </Box>
        </motion.div>
        <motion.div
        viewport={{ once: true }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Box pt="2vh">
            <Text
              color="gray.400"
              align="center"
              justify="center"
              fontSize={{ base: "md", sm: "3xl", lg: "2xl" }}
            >
              Devtek Solutions provides you the best service for your team for
              your company to start growing
            </Text>
          </Box>

          <Box>
            <Flex direction="column">
              <Box pr="1vw">
                <Text
                  color="gray.400"
                  align="center"
                  fontSize={{ base: "md", sm: "3xl", lg: "2xl" }}
                >
                  with{" "}
                  <Box as="em" color="white" fontStyle="normal">
                    fast
                  </Box>{" "}
                  and{" "}
                  <Box as="em" color="white" fontStyle="normal">
                    flexible solutions
                  </Box>{" "}
                  for BTB and BTC companies
                </Text>
              </Box>
            </Flex>
          </Box>
        </motion.div>

        <Box pt={{ base: "10vh", md: "10vh", lg: "10vh" }} alignSelf="center">
          <motion.div
          viewport={{ once: true }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Button
              bgColor="brand.primary"
              p="5"
              borderRadius="5"
              h={{ base: "6vh", md: "7vh", lg: "5vh" }}
              w={{ base: "80vw", md: "50vw", lg: "20vw" }}

              onClick={() => {
                window.location.href = "#hero";
              }}
              _hover={{
                bgColor: "brand.secondary",
              }}
            >
              <Text fontSize={{base: "lg", md: "2xl", lg: "xl"}}>Start your journey now</Text>{" "}
            </Button>
          </motion.div>{" "}
        </Box>
      </Flex>
    </Container>
  );
};
export default Main;
