import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Cards from "./components/Cards";
import Testimonials from "./components/Testimonials";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import { Flex } from "@chakra-ui/react";

import { useState, useEffect } from "react";

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const applyResponsive = () => {
    if (window.innerWidth <= 986) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    applyResponsive();
  }, []);

  window.addEventListener("resize", applyResponsive);

  return (
    <>
      <Navbar isMobile={isMobile} />
      <Flex justify="center" direction="column">
        <Main isMobile={isMobile} />
        <Hero isMobile={isMobile} />
        <Cards isMobile={isMobile} />
        <Testimonials isMobile={isMobile} />
        <Footer isMobile={isMobile} />
      </Flex>
    </>
  );
}

export default App;
