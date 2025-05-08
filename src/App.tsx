import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import KeyMetrics from "./components/KeyMetrics";
import LogoAnimation from "./components/LogoAnimation";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Stack from "./components/Stack";

function App() {
  return (
    <div className="w-full min-h-screen  flex flex-col">
      <Navbar />
      <About />
      <Stack />
      <LogoAnimation />
      <Portfolio />
      <KeyMetrics />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
