import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import "./index.css";
import Product from "./components/Product";

function App() {
  return (
    <div data-theme="light">
      <Navbar />
      <Hero />
      <Product />
    </div>
  );
}

export default App;
