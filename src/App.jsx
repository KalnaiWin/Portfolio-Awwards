import NavBar from "./sections/NavBar";

const App = () => {
  return (
    <div className="relative w-screen min-h-screen overflow-x-auto">
      <NavBar />
      <section id="home" className="min-h-screen bg-cyan-700"></section>
      <section id="service" className="min-h-screen bg-amber-900"></section>
    </div>
  );
};

export default App;
