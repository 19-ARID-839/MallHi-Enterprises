import "./App.css";
import FleetTop from "./components/Fleet/FleetTop";
import Cards from "./components/fleetcard/Cards";
// import Mainsection from "./components/mainsection/mainsection";
import Mainsection from "./components/mainsection/Mainsection";
import Services from "./components/services/Services";
import ServicesCard from "./components/services/ServicesCard";
function App() {
  return (
    <>
      <Mainsection />
      <FleetTop />
      <Cards />
      <Services />
      <ServicesCard />
    </>
  );
}

export default App;
