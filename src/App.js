import logo from './logo.svg';
import './App.css';
import {Header} from './MyComponents/Header';
import {Products} from './MyComponents/Products';
import {Product} from './MyComponents/Product/Product';
import {About} from './MyComponents/About';
import {Trial} from './MyComponents/Trial';
import {Buynow} from './MyComponents/Buy Now/Buynow';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch
} from "react-router-dom";


function App() {
  return (
    <>
    <Router>
    <Header/>
    {/* <About/> */}
    {/* <Product/>  */}
    <Routes>

    {/* <Products/>  */}
    \
    <Route path="/" element={<About/>}/>
    <Route path="/products" element={<Product/>}/>
    <Route path="/about" element={<About/>}/>
    {/* <About/> */}
    {/* <Trial/> */}
    <Route path="/cart" element={<Buynow/>}/>

      </Routes>
    </Router>
   </>
  );
}

export default App;
