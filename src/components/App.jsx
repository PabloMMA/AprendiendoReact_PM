import React from "react";
import Navbar from "./components/content/Navbar";
import Home from "./components/content/Home";
import "./App.css";
import Cart from "./components/content/Cart";


const App = () => {
  return (
        <>
          <Navbar/>
          <Home/>
          <Cart/>
        </>
  );
};

export default App;
