import Hero from "./sections/Hero";
import NavBar from "./sections/NavBar";

const App = () => {
  return (
    <div className="relative w-screen min-h-screen overflow-x-auto">
      <NavBar />
      <Hero />
      <section id="home" className="min-h-screen"></section>
      <section id="service" className="min-h-screen"></section>
    </div>
  );
};

export default App;
