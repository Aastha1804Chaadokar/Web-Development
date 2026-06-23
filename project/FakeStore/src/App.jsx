import react from "react";
import Header from "./component/Header";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Product from "./pages/Product";
import Home from "./pages/Home";
const App =() => {
return(
  <>
  <BrowserRouter>
  <Header/>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/ contact" element={<Contact />} />
    <Route path="/product" element={<Product />} />
  </Routes>
  </BrowserRouter>
  
  </>
);
};
export default App;
