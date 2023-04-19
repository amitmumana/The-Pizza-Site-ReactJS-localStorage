import React from "react"
import {Route, Routes} from "react-router-dom"
import HomePage from "./Pages/HomePage";
import Navbar from "./components/Navbar"
import CartPage from "./Pages/CartPage";
import BottomContainer from "./components/BottomContainer";

function App() {
  return (
    <div className="App">
       <Navbar/>
       <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/cart" element={<CartPage/>}/>
       </Routes>
       <BottomContainer/>
    </div>
  );
}

export default App;
