import Hero from "./sections/Hero";
import NavBar from "./sections/NavBar";
import ServiceSummary from "./sections/ServiceSummary";

const App = () => {
  return (
    <div className="relative w-screen min-h-screen overflow-x-auto">
      <NavBar />
      <Hero />
      <ServiceSummary />
    </div>
  );
};

export default App;
