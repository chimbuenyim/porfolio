import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Footer from "../src/components/Footer";
import HeroSection from "../src/components/HeroSection";
import Navbar from "../src/components/Navbar";
import Skills_Experience from "../src/components/Skills_Experience/Experience";
import { NavbarConfig } from "../src/utils/Config/NavbarConfig";

const Home = ({ currentTheme, setCurrentTheme }) => {
  return (
    <>
      <Navbar
        navbarConfig={NavbarConfig}
        currentTheme={currentTheme}
        setCurrentTheme={setCurrentTheme}
      />
      {/* <HeroSection /> */}

      <About />
      <Skills_Experience />
      <Contact />
      <Footer />
    </>
  );
};
export default Home;
