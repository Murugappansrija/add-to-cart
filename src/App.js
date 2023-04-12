import React from "react";
import "./App.css"
import { Cart } from "./Pages/Cart";
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
import Home from "./components/home";
import { Shopcontextprovider } from "./components/CartCard";


function App() {
  return (
    
    <div className="App">
      <Shopcontextprovider>
    <Router>
      <div className="linkdiv">
      <Link to ="/"  className="links"> home</Link>
      <Link to ="/cart" className="links" > cart</Link>
      </div>
       
      <Routes>
        
        <Route path="/" element ={<Home/>}/>
        <Route path="/cart" element ={<Cart/>}/>
      </Routes>
      
    </Router>
    </Shopcontextprovider>
    
    </div>
  
    
  );
}

export default App;