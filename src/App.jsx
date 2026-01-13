import "./App.css";
import './index.css'
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import OrderForm from "./components/OrderForm";
import JoinUs from "./components/JoinUs";
import Footer from "./components/Footer";

function App() {
  return (
      <div className="App">
        <Header />
        <Hero />
        <About />
        <Products />
        <OrderForm />
        <JoinUs />
        <Footer />
      </div>
  );
}

export default App;
