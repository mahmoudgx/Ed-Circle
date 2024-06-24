import Collaboration from "./compaontes/Collaboration";
import Hero from "./compaontes/Hero";
import Navbar from "./compaontes/Navbar";
import Programs from "./compaontes/Programs";
import Services from "./compaontes/Services";
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
    </>
  );
};

export default App;
