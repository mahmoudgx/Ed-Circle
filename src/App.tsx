import Collaboration from "./compaontes/Collaboration";
import Footer from "./compaontes/Footer";
import Hero from "./compaontes/Hero";
import Navbar from "./compaontes/Navbar";
import Programs from "./compaontes/Programs";
import Services from "./compaontes/Services";
import Testimonials from "./compaontes/Testimonials";
import Tutors from "./compaontes/Tutors";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Collaboration />
      <Services />
      <Programs />
      <Tutors />
      <Testimonials />
      <Footer />
    </>
  );
};

export default App;
