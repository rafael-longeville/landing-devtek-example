import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";

import Logo from "../assets/DevTekLogo.webp";

const Links = [
  { name: "Services", href: "#services" },
  { name: "Book a call", href: "#hero" },
  { name: "Testimonials", href: "#testimonials" },
];

const NavLink = ({ children, isOpen, onClose, onOpen }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    color="gray.300"
    _hover={{
      textDecoration: "none",
      color: "white",
    }}
    href={children.href}
    onClick={isOpen ? onClose : onOpen}
  >
    {children.name}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justify="center">
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack
            alignItems={"center"}
            w="90%"
            justifyContent={"space-between"}
          >
            <Box pl={{ base: "5vw", md: null, lg: null }}>
              <Image
                src={Logo}
                h={{ base: "5vh" }}
                w={{ base: "15vh" }}
              ></Image>
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
        </Flex>

        {isOpen && (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink
                  key={link}
                  isOpen={isOpen}
                  onClose={onClose}
                  onOpen={onOpen}
                >
                  {link}
                </NavLink>
              ))}
            </Stack>
          </Box>
        )}
      </Box>
    </>
  );
}
