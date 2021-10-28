import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Hero from "./Hero";
import Mission from "./Mission";
import Navbar from "./Navbar";
import Request from "./Request";
import Service from "./Service";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Service />
      <Request />
      <About />
      <Mission />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
