import "./App.css";
import About from "./components/About/About";
import Benefits from "./components/Benefits/Benefits";
import Header from "./components/Header/Header";
import Price from "./components/Price/Price";
import Services from "./components/Services/Services";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {
  return (
    <div className="container">
      <Header />
      <About />
      <Benefits />
      <Services />
      <Price />
      <Testimonials />
    </div>
  );
}

export default App;
